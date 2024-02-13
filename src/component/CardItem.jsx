import React, { useContext } from "react";
import { Card, CardImg, Col, Button } from "react-bootstrap";
import { CardContext } from "../cardContext";

const CardItem = ({ img, title, price, id, setToastList }) => {
  const { dispatch } = useContext(CardContext);
  const handleClick = () => {
    setToastList((prev) => [...prev, { title, body: "Item Added" }]);
    dispatch({ type: "ADD_CART", paylod: { title, price, id, quantity: 1 } });

    setTimeout(() => {
      setToastList((prev) => prev.filter((_, index) => index !== 0));
    }, 3000);
  };

  return (
    <>
      <Col xl="6" xxl="2" lg="4" md="6" sm="12">
        <Card className="p-2 mb-3">
          <CardImg
            style={{ height: "200px", objectFit: "contain" }}
            src={require(`../img/${img}`)}
            alt={title}
          />
          <Card.Body>
            <Card.Title className="fs-6">{title}</Card.Title>
            <Card.Text className="font-weight-bold fs-5">₹{price}</Card.Text>
            <Button onClick={handleClick} className="card-button">
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardItem;
