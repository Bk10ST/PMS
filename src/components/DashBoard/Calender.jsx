import React, { useState } from "react";
import "./Dash-css/Calander.css";

const Calendar = () => {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);

  const prevMonth = () => {
    setMonth((month) => (month === 0 ? 11 : month - 1));
    setYear((year) => (month === 0 ? year - 1 : year));
  };

  const nextMonth = () => {
    setMonth((month) => (month === 11 ? 0 : month + 1));
    setYear((year) => (month === 11 ? year + 1 : year));
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
          <li key={day}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
