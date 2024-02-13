import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Stack, Dropdown, Popover, ListGroup } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useSearchParams } from "react-router-dom";
import { CardContext } from "../cardContext";
import TotalItemList from "./TotalItemList";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";

const Navbar = ({ setToastList }) => {
  const { itemlist } = useContext(CardContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  const [active, setActive] = useState("");

  const handleParams = (key, value) => {
    setActive(value);
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const clearParams = () => {
    setSearchParams({});
  };

  const ShoppingCart = (
    <Popover id="popover-positioned-bottom" title="Your Cart">
      <h4 className="shoping-cart-heading">Cart</h4>
      <TotalItemList remove={false} setToastList={setToastList} />
    </Popover>
  );

  useEffect(() => {
    setSort(searchParams.get("sort"));
  }, [searchParams]);

  return (
    <Row className=" py-2 fs-3 navbar-bg mb-2">
      <Col md="2" className="navbar-heading">
        Grocery Basket
      </Col>

      <Col md="9">
        <Stack direction="horizontal" gap={3}>
          <span
            className="navbar-text"
            onClick={() => handleParams("type", null)}
          >
            All
          </span>
          <span
            className="navbar-text"
            onClick={() => handleParams("type", "fruit")}
          >
            Fruit
          </span>
          <span
            className="navbar-text"
            onClick={() => handleParams("type", "vegetable")}
          >
            Vegetables
          </span>
          <span
            className="navbar-text"
            onClick={() => handleParams("type", "seed")}
          >
            Seeds
          </span>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                width: "100px",
                backgroundColor: "transparent",
                border: "none",
              }}
              id="dropdown-basic"
            >
              Sort{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className={`dropdownItem ${
                  sort === "asc" || sort === "desc" ? "active" : ""
                }`}
                onClick={() =>
                  handleParams("sort", `${sort === "asc" ? "desc" : "asc"}`)
                }
              >
                By Price
                {sort === "asc" && <i class="ri-arrow-down-line"></i>}
                {sort === "desc" && <i class="ri-arrow-up-line"></i>}
              </Dropdown.Item>

              <Dropdown.Item
                className={`dropdownItem ${
                  sort === "titleAsc" || sort === "titleDesc" ? "active" : ""
                }`}
                onClick={() =>
                  handleParams(
                    "sort",
                    `${sort === "titleAsc" ? "titleDesc" : "titleAsc"}`
                  )
                }
              >
                By Title{" "}
                {sort === "titleAsc" && <i class="ri-arrow-down-line"></i>}
                {sort === "titleDesc" && <i class="ri-arrow-up-line"></i>}
              </Dropdown.Item>

              <Dropdown.Item
                className={`dropdownItem ${
                  sort === "catAsc" || sort === "catDesc" ? "active" : ""
                }`}
                onClick={() =>
                  handleParams(
                    "sort",
                    `${sort === "catAsc" ? "catDesc" : "catAsc"}`
                  )
                }
              >
                By Category
                {sort === "catAsc" && <i class="ri-arrow-down-line"></i>}
                {sort === "catDesc" && <i class="ri-arrow-up-line"></i>}
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={clearParams}>clear</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
      </Col>
      <Col md="1">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={ShoppingCart}
        >
          <div className="notification-container">
            <i className="ri-shopping-cart-2-line shop-cart"></i>
            {itemlist.length > 0 && (
              <div className="notification">{itemlist.length}</div>
            )}
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default Navbar;
/* 

                         */
