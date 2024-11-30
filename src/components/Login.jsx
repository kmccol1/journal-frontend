import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok)
	  {
        throw new Error('Login failed');
      }

      const result = await response.json();
      console.log(result);

      // Save JWT token or user info to localStorage (or context)
      localStorage.setItem('token', result.token);

      // Redirect to profile page after successful login
      navigate('/profile');
    }
	catch (error)
	{
      setErrorMessage(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={4} boxShadow={3} borderRadius={4} textAlign="center">
        <Typography variant="h4" gutterBottom>Login</Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            label="Username" 
            fullWidth 
            margin="normal" 
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            margin="normal" 
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;