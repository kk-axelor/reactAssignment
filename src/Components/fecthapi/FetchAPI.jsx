import React, { useState } from "react";
import Button from "../Button/Button";
import { type } from "@testing-library/user-event/dist/type";

const FetchAPI = () => {
  const [contactData, setContactData] = useState([]);

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        mode: "no-cors",
      });
      console.log("hello");
      console.log(res);
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Button text={"Click here to Fetch Data"} onClick={handleClick} />
      <div>{}</div>
    </section>
  );
};

export default FetchAPI;
