// src/components/Calendar.js
import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import './Calendar.css';  // Import the CSS

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDay = () => setCurrentDate(addDays(currentDate, 1));
  const handlePrevDay = () => setCurrentDate(addDays(currentDate, -1));

  return (
    <div className="calendar-container">
      <h2>{format(currentDate, 'MMMM dd, yyyy')}</h2>
      <div>
        <button onClick={handlePrevDay}>Previous Day</button>
        <button onClick={handleNextDay}>Next Day</button>
      </div>
      <div className="date-box">
        <h3>Today's Gratitude</h3>
        <p>Write your gratitude for today...</p>
      </div>
    </div>
  );
};

export default Calendar;