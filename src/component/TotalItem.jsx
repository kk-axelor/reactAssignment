import { ListGroup, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { CardContext } from "../cardContext";

const TotalItem = ({
  id,
  title,
  price,
  quantity,
  setToastList,
  remove = true,
}) => {
  const { dispatch } = useContext(CardContext);

  const handleDeleteItem = () => {
    dispatch({ type: "REMOVE_CART", paylod: { id } });
  };
  const increaseQuantity = () => {
    setToastList((prev) => [...prev, { title, body: "Item Added" }]);
    dispatch({ type: "INCREASE_ITEM", paylod: { id, price } });
    setTimeout(() => {
      setToastList((prev) => prev.filter((_, index) => index !== 0));
    }, 3000);
  };
  const decreaseQuantity = () => {
    setToastList((prev) => [...prev, { title, body: "Item Removed" }]);
    dispatch({ type: "DECREASE_ITEM", paylod: { id, price } });
    setTimeout(() => {
      setToastList((prev) => prev.filter((_, index) => index !== 0));
    }, 3000);
  };

  return (
    <ListGroup.Item as="li" className="d-flex">
      <div className="d-flex justify-content-between w-100 align-items-center position-relative ">
        <div className=" d-flex flex-column mx-1 cart-title ">
          <p className="mb-1">
            {title}/ &nbsp; ₹{price}
          </p>
          <div className=" d-flex flex-row gap-2  align-items-center">
            <Button
              className="inc-dec-btn"
              variant="danger"
              onClick={decreaseQuantity}
            >
              -
            </Button>
            <span className="w-10">{quantity}</span>
            <Button
              className="inc-dec-btn"
              variant="success"
              onClick={increaseQuantity}
            >
              +
            </Button>
          </div>{" "}
        </div>

        <span className="bg-primary rounded-pill badge item-price ">
          <p>{Number.parseFloat(price * quantity).toFixed(2)}</p>
        </span>
        {remove && (
          <div onClick={handleDeleteItem} className="cross-btn">
            <img
              className="w-100 p-0"
              src="https://cdn-icons-png.flaticon.com/512/9312/9312232.png"
              alt=""
            />
          </div>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default TotalItem;
