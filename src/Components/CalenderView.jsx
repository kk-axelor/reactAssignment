import React, { useEffect, useId, useState } from "react";
import { weeeks, months } from "../constant";

import styles from "./calenderView.module.css";
const CalenderView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [list, setList] = useState([]);
  const [firstDay, setFirstDay] = useState();
  const brID = useId();

  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 0o1).getDay();
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();
    setFirstDay(firstDay);

    const total = firstDay + days;
    setList(
      Array(total)
        .fill()
        .map((_, index) => index + 1)
    );
  }, [currentMonth, currentYear]);

  const handleClick = (type) => {
    if (type === "Prev") {
      setCurrentMonth(currentMonth === 0 ? currentMonth : currentMonth - 1);
      setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    } else {
      setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
      setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.calenderHeader}>
        <button onClick={() => handleClick("Prev")}>Prev</button>
        <p>
          {months[currentMonth]}-{currentYear}
        </p>

        <button onClick={() => handleClick("Next")}>Next</button>
      </div>
      <ul className={styles.showDates}>
        {weeeks.map((item, i) => (
          <li key={i} className={styles.list}>
            {item}
          </li>
        ))}

        <div>
          {list.map((day, i) => (
            <>
              <li className={styles.list} key={i}>
                {day - firstDay <= 0 ? <span>&nbsp;</span> : day - firstDay}
              </li>
              {day % 7 === 0 && <br key={brID} />}
            </>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default CalenderView;
