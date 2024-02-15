import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Stack, Dropdown, Popover, NavLink } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useSearchParams } from "react-router-dom";
import { CardContext } from "../cardContext";
import TotalItemList from "./TotalItemList";
import { order } from "../utils/utilsMethod";
import { navbarLink } from "../constants/constant";

const Navbar = ({ setToastList }) => {
  const { itemlist } = useContext(CardContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  const [activeLink, setActiveLink] = useState(null);

  const handleParams = (key, value) => {
    if (key === "type") setActiveLink(value);

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
    setActiveLink("All");
    setSearchParams({});
  };

  const ShoppingCart = (
    <Popover id="popover-positioned-bottom" title="Your Cart">
      <h4 className="shoping-cart-heading">Cart</h4>
      <TotalItemList remove={false} setToastList={setToastList} />
    </Popover>
  );

  console.log(activeLink);
  console.log(itemlist);

  useEffect(() => {
    setSort(searchParams.get("sort"));
  }, [searchParams]);

  return (
    <Row className=" py-2 fs-3 navbar-bg mb-2">
      <Col md="4" lg xl="2" className="navbar-heading">
        Grocery Basket
      </Col>

      <Col md="7" lg xl="9">
        <Stack direction="horizontal" gap={3} id="navbar-container">
          {navbarLink.map((link) => (
            <NavLink
              key={link.type}
              className={`navbar-text ${
                activeLink === link.type ? "activeLink" : ""
              }`}
              onClick={() => handleParams("type", link.type)}
            >
              {link.name}
            </NavLink>
          ))}

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
                {sort === "desc" && order(0)}
                {sort === "asc" && order(1)}
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
                By Title {sort === "titleDesc" && order(0)}
                {sort === "titleAsc" && order(1)}
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
                {sort === "catDesc" && order(0)}
                {sort === "catAsc" && order(1)}
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
