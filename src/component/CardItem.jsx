import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import { CardContext } from "../cardContext";

const CardItem = ({ img, title, price, id, setToastList }) => {
  const { dispatch } = useContext(CardContext);

  const handleClick = () => {
    setToastList((prev) => [...prev, title]);
    dispatch({ type: "ADD_CART", paylod: { title, price, id, quantity: 1 } });

    setTimeout(() => {
      setToastList((prev) => prev.filter((_, index) => index !== 0));
    }, 3000);
  };

  return (
    <>
      <Col xl="3" xxl="2" lg md="6">
        <Card className="p-2">
          <CardImg style={{ height: "200px", objectFit: "cover" }} src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="font-weight-bold fs-5">₹{price}</Card.Text>
            <Button onClick={handleClick} variant="primary">
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardItem;
