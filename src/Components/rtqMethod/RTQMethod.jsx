import React, { useState } from "react";
import Button from "../Button/Button";
import { useGetContactsQuery } from "../../redux/myapi";
import Card from "../Card/Card";

const RTQMethod = () => {
  const [contacts, setContacts] = useState([]);
  const { data } = useGetContactsQuery();

  const handleClick = () => {
    setContacts(data);
  };
  return (
    <div>
      <Button onClick={handleClick}>Fetch data using RTK query</Button>
      <div className="cards-container">
        {contacts.map((item, id) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RTQMethod;
