// src/components/Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { addDays, format } from 'date-fns';  // Optional for date manipulation

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DateBox = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: 150px;
  text-align: center;
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDay = () => setCurrentDate(addDays(currentDate, 1));
  const handlePrevDay = () => setCurrentDate(addDays(currentDate, -1));

  return (
    <CalendarContainer>
      <h2>{format(currentDate, 'MMMM dd, yyyy')}</h2>
      <div>
        <button onClick={handlePrevDay}>Previous Day</button>
        <button onClick={handleNextDay}>Next Day</button>
      </div>
      <DateBox>
        <h3>Today's Gratitude</h3>
        <p>Write your gratitude for today...</p>
      </DateBox>
    </CalendarContainer>
  );
};

export default Calendar;