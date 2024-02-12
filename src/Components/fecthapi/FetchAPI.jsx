import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const FetchAPI = () => {
  const [contactData, setContactData] = useState([]);

  const handleClick = async () => {
    const res = await fetch("http://localhost:5000/api/contacts");
    const data = await res.json();
    setContactData(data);
  };

  return (
    <section>
      <Button onClick={handleClick}>Click here Fetch Data</Button>
      <div className="cards-container">
        {contactData.map((item, id) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FetchAPI;
