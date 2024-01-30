import React, { useEffect, useId, useState } from "react";
import { weeeks, months } from "../constant";

import "./calenderView.css";
const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [list, setList] = useState([]);
  const [firstDay, setFirstDay] = useState();
  const brid = useId();

  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 0o1).getDay();
    const nod = new Date(currentYear, currentMonth + 1, 0).getDate();
    setFirstDay(firstDay);

    const total = firstDay + nod;
    setList(
      Array(total)
        .fill()
        .map((_, index) => index + 1)
    );
  }, [currentMonth, currentYear]);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="container">
      <div className="calender-header">
        <button onClick={handlePrev}>Prev</button>
        <p>
          {months[currentMonth]}-{currentYear}
        </p>

        <button onClick={handleNext}>Next</button>
      </div>
      <ul className="showDates">
        {weeeks.map((item, i) => (
          <li key={i} className="list">
            {item}
          </li>
        ))}

        <div>
          {list.map((day, i) => (
            <>
              <li className="list" key={i}>
                {day - firstDay <= 0 ? <span>Na</span> : day - firstDay}
              </li>
              {day % 7 === 0 && <br key={brid} />}
            </>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default CalenderView;
