# 🌟 Gratitude Journal (React Frontend)

Welcome to the **Gratitude Journal**! This React-based web application helps users reflect on their daily gratitude, promoting positivity and mindfulness. Built with a modern React stack and Material-UI for a sleek, user-friendly experience.

## ✨ Features
- **User Registration & Login:** Secure authentication with JWT.
- **Daily Entries:** Add, view, and edit your daily gratitude entries.
- **Calendar View:** Navigate through past entries using an intuitive calendar interface.
- **Responsive Design:** Fully responsive layout using Material-UI.
- **Private Profile:** Personalized profiles for each user.

## 🚀 Tech Stack
- **Frontend:** React, React Router, Material-UI
- **State Management:** React Hooks
- **Backend Integration:** REST API calls to the backend (assumed on `localhost:8080`)

## 🛠️ Setup Instructions

### Prerequisites:
- Node.js (v14 or later)
- npm or yarn

### Clone the Repository:
```bash
git clone https://github.com/your-username/journal-frontend.git
cd gratitude-journal-frontend
```

### Install Dependencies:
```bash
npm install
# or
yarn install
```

### Start the Development Server:
```bash
npm start
# or
yarn start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Connect to the Backend:
Ensure your backend API is running at `http://localhost:8080` or adjust the fetch URLs in the `Register` and `Login` components.

## 📂 Project Structure
```
src/
  ├── components/
  │   ├── Header.js
  │   ├── HomePage.js
  │   ├── Calendar.js
  │   ├── Login.jsx
  │   ├── Register.jsx
  │   └── Profile.jsx
  ├── styles/
  │   └── GlobalStyles.js
  ├── App.js
  └── index.js
```

## 🧑‍💻 Contributions
Contributions are welcome! If you'd like to enhance the features or fix bugs, please open an issue or pull request.

## 📜 License
This project is licensed under the MIT License.

---