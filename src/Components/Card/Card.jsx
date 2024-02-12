import React from "react";
import styles from "./card.module.css";

const Card = ({ firstName, lastName }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImg}
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt=""
      />
      <div>
        <p>
          <strong>FirstName:</strong>
          {firstName}
        </p>
        <p>
          <strong>LastName:</strong>
          {lastName}
        </p>
      </div>
    </div>
  );
};

export default Card;
