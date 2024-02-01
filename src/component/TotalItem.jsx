import { ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { CardContext } from "../cardContext";

const TotalItem = ({ id, title, price, quantity }) => {
  const { dispatch } = useContext(CardContext);
  const handleDeleteItem = () => {
    dispatch({ type: "REMOVE_CART", paylod: { id } });
  };
  const increaseQuantity = () => {
    dispatch({ type: "INCREASE_ITEM", paylod: { id, price } });
  };
  const decreaseQuantity = () => {
    dispatch({ type: "DECREASE_ITEM", paylod: { id, price } });
  };

  return (
    <ListGroup.Item as="li" className="d-flex">
      <div className="d-flex justify-content-between w-100 align-items-center position-relative ">
        <div className=" d-flex flex-column mx-2 cart-title ">
          <p className="mb-1">{title}</p>
          <p className="m-0 ">
            ₹ {price}*{quantity}
          </p>
        </div>
        <div className=" d-flex flex-row mx-2   ">
          <button className="inc-dec-btn" onClick={increaseQuantity}>
            +
          </button>
          <button className="inc-dec-btn" onClick={decreaseQuantity}>
            -
          </button>
        </div>
        <span className="bg-primary rounded-pill badge item-price ">
          <p>{Number.parseFloat(price * quantity).toFixed(2)}</p>
        </span>
        <div onClick={handleDeleteItem} className="cross-btn">
          <img
            className="w-100 p-0"
            src="https://cdn-icons-png.flaticon.com/512/9312/9312232.png"
            alt=""
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default TotalItem;
