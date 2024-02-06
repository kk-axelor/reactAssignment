import { Col, Container, Toast, ListGroup, Row } from "react-bootstrap";
import "./app.css";
import CardItem from "./component/CardItem";
import TotalItem from "./component/TotalItem";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "./cardContext";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import { useSearchParams } from "react-router-dom";
import data from "./JSON_DATA.json"

function App() {
  const { itemlist, total } = useContext(CardContext);
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
    } else if (sort === "desc") {
      filteredItems.sort((a, b) => b.price - a.price);
    } else if (sort === "title") {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilterItem(filteredItems);

  }, [param])

  return (
    <>
      <Container fluid>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col lg xl="2" md="2">
            <SideBar />
          </Col>
          <Col className="left" lg xl="6" md="6">
            <Row>
              {filterItem.map((item, i) => (
                <CardItem key={i} {...item} setToastList={setToastList} />
              ))}
            </Row>
          </Col>
          <Col lg xl="4" md="4">
            <ListGroup as='ol' numbered>
              {
                itemlist.length === 0 ? <p className="w-100 p-3  rounded bg-antiquewhite" >cart is empty</p> :
                  <>
                    {
                      itemlist.map((item, i) => (
                        <TotalItem key={i}  {...item} />
                      ))
                    }
                    <div className="border border-gray  border-1 border-top-0 d-flex justify-content-between  my-auto  px-3  pt-2 ">
                      <p className="font-bold ">Net Total</p>
                      <p className="badge rounded-pill   bg-primary">{Number.parseFloat(total).toFixed(2)}</p>
                    </div>
                  </>
              }
            </ListGroup>
          </Col>
        </Row>
      </Container >
      <div className="toast-container">
        {
          toastList.map((item) => (
            <Toast>
              <Toast.Header>
                <strong className="me-auto">{item}</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>Added Succesfully.</Toast.Body>
            </Toast>
          ))
        }
      </div >
    </>

  );
}

export default App;
