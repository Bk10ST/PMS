import React, { useState, useEffect } from "react";
import "./Dash-css/Calander.css";

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [highlightedDates, setHighlightedDates] = useState([5, 10, 15]); // Example highlighted dates provided by the user

  useEffect(() => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }, []);

  const prevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setYear((prevMonth) => (prevMonth === 0 ? year - 1 : year));
  };

  const nextMonth = () => {
    setMonth((nextMonth) => (nextMonth === 11 ? 0 : nextMonth + 1));
    setYear((nextMonth) => (nextMonth === 11 ? year + 1 : year));
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calender-module">
      <div className="month">
        <ul>
          <li className="prev" onClick={prevMonth}>
            &#10094;
          </li>
          <li className="next" onClick={nextMonth}>
            &#10095;
          </li>
          <li>
            {new Date(year, month).toLocaleString("en-US", { month: "long" })}
            <br />
            <span style={{ fontSize: "18px" }}>{year}</span>
          </li>
        </ul>
      </div>
      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>
      <ul className="days">
        {daysArray.map((day) => (
          <li key={day} className={highlightedDates.includes(day) ? 'highlighted' : ''}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
