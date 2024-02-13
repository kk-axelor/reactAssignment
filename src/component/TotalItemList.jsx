import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { CardContext } from "../cardContext";
import TotalItem from "./TotalItem";

const TotalItemList = ({ setToastList, remove }) => {
  const { itemlist, total } = useContext(CardContext);
  return (
    <ListGroup as="ol" numbered>
      {itemlist.length === 0 ? (
        <p className="w-100 p-3  rounded bg-antiquewhite">cart is empty</p>
      ) : (
        <>
          {itemlist.map((item, i) => (
            <TotalItem
              key={i}
              {...item}
              setToastList={setToastList}
              remove={remove}
            />
          ))}
          <div className="border border-gray  border-1 border-top-0 d-flex justify-content-between  my-auto  px-3  pt-2 ">
            <p className="font-bold ">Net Total</p>
            <p className="badge rounded-pill   bg-primary">
              {Number.parseFloat(total).toFixed(2)}
            </p>
          </div>
        </>
      )}
    </ListGroup>
  );
};

export default TotalItemList;
