import React from "react";
import { Container, Row, Dropdown, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleParams = (key, value) => {
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
  return (
    <Container fluid className="sidebar-container">
      <Row>
        <Dropdown>
          <p className="heading">Filters:</p>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ width: "100px" }}
          >
            All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleParams("type", null)}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleParams("type", "fruit")}>
              Fruit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleParams("type", "vegetable")}>
              Vegetables
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row>
        <Dropdown>
          <p className="heading">Sort:</p>
          <Dropdown.Toggle
            variant="success"
            style={{ width: "100px" }}
            id="dropdown-basic"
          >
            Price{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleParams("sort", "asc")}>
              Price: Low to High
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleParams("sort", "desc")}>
              price:High to low
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleParams("sort", "title")}>
              By Title
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <div className="clear-filter">
        <Button className="button" onClick={clearParams}>
          Clear Filter
        </Button>
      </div>
    </Container>
  );
};

export default SideBar;
