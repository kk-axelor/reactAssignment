import { Col, Container, Toast, ListGroup, Row } from "react-bootstrap";
import "./app.css";
import CardItem from "./component/CardItem";
import TotalItem from "./component/TotalItem";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "./cardContext";
import Navbar from "./component/Navbar";
import { useSearchParams } from "react-router-dom";
import data from "./JSON_DATA.json"
import TotalItemList from "./component/TotalItemList";

function App() {
  const [toastList, setToastList] = useState([]);
  const [items, setItems] = useState(data)
  const [filterItem, setFilterItem] = useState(items)
  const [param, setParam] = useSearchParams();

  useEffect(() => {
    const type = param.get("type")
    const sort = param.get('sort')

    if (type === null && sort === null) {
      setFilterItem(items)
      return;
    }

    let filteredItems = [...items];
    // Filter by type
    if (type !== null) {
      filteredItems = filteredItems.filter((item) => item.type === type);
    }


    // Sort
    if (sort === "asc") {
      filteredItems.sort((a, b) => a.price - b.price);
    }
    else if (sort === "desc") {
      filteredItems.sort((a, b) => b.price - a.price);
    }
    else if (sort === "titleAsc") {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sort === "titleDesc") {
      filteredItems.sort((a, b) => b.title.localeCompare(a.title));
    }
    else if (sort === "catAsc") {
      filteredItems.sort((a, b) => a.type.localeCompare(b.type))
    }
    else if (sort === "catDesc") {
      filteredItems.sort((a, b) => b.type.localeCompare(a.type))
    }
    setFilterItem(filteredItems);

  }, [param])

  return (
    <>
      <Container fluid>
        <Navbar setToastList={setToastList} />
        <Row>
          <Col className="left" lg="8" xl="8" md="8">
            <Row>
              {filterItem.map((item, i) => (
                <CardItem key={i} {...item} setToastList={setToastList} />
              ))}
            </Row>
          </Col>
          <Col xl="4" md="4" lg="4">
            <TotalItemList setToastList={setToastList} />
          </Col>
        </Row>
      </Container >
      <div className="toast-container">
        {
          toastList.map((item, i) => (
            <Toast key={i}>
              <Toast.Header>
                <strong className="me-auto">{item.title}</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>{item.body}</Toast.Body>
            </Toast>
          ))
        }
      </div >
    </>

  );
}

export default App;


