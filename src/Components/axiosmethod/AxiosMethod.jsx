import React, { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import Card from "../Card/Card";

const AxiosMethod = () => {
  const [contacts, setContacts] = useState([]);
  const handleClick = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/api/contacts");
      setContacts(data);
    } catch (error) {
      alert("Internal server error");
    }
  };
  return (
    <div>
      <Button onClick={handleClick}>Fetch Data using Axios</Button>

      <div className="cards-container">
        {contacts.map((item, id) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AxiosMethod;
