// src/pages/CalendarPage.js
import React from 'react';
import Calendar from '../components/Calendar';  // Import Calendar component
import './CalendarPage.css';  // You can add any global styles for the calendar page here

const CalendarPage = () => {
  return (
    <div className="calendar-page">
      <h1>Gratitude Calendar</h1>
      <Calendar />  {/* Render the Calendar component */}
    </div>
  );
};

export default CalendarPage;