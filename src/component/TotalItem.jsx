import { ListGroup } from "react-bootstrap";
import React from "react";

const TotalItem = ({ id, title, price, quantity }) => {
  return (
    <ListGroup.Item as="li" className="d-flex">
      <div className="d-flex justify-content-between w-100 align-items-center ">
        <div className=" d-flex flex-column mx-2   ">
          <p className="mb-1">{title}</p>
          <p className="m-0 ">
            ₹ {price}*{quantity}
          </p>
        </div>
        <span className="bg-primary rounded-pill badge ">
          {Number.parseFloat(price * quantity).toFixed(2)}
        </span>
      </div>
    </ListGroup.Item>
  );
};

export default TotalItem;
