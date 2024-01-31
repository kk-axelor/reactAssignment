import { Col, Container, Toast, ListGroup, Row } from "react-bootstrap";
import "./app.css";
import { data } from "./constant";
import CardItem from "./component/CardItem";
import TotalItem from "./component/TotalItem";
import { useContext, useState } from "react";
import { CardContext } from "./cardContext";
import Navbar from "./component/Navbar";

function App() {

  const { itemlist, total } = useContext(CardContext);
  const [toastList, setToastList] = useState([])

  return (
    <>
      <Container fluid>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col className="left" lg xl="8" md="6">
            <Row>
              {data.map((item, i) => (
                <CardItem key={i} {...item} setToastList={setToastList} />
              ))}
            </Row>
          </Col>
          <Col lg xl="4" md="6">
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
