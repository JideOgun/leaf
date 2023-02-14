/* eslint-disable no-const-assign */
import { Container, Row, Col, col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function Modal(props) {
  console.log(props);

  if (!props.show) {
    return null;
  }

  let joinedData = props.usaData.concat(props.gbData);

  const selectedData = () => {
    const data = joinedData.filter((e) => {
      return e.author === props.modalData;
    });

    return (
      <div className="card newsCard">
        <div className="card-img">
          <img
            className="card-img"
            src={data[0].urlToImage}
            alt="stuff"
            style={{ width: "100%" }}
          />
        </div>
        {console.log(data)}
        {data[0].description}
        <br />
        <div> {data[0].author}</div>
      </div>
    );
  };

  return (
    <div className="modal" onClick={props.onClose}>
      {selectedData()}
      <div></div>
    </div>
  );
}

export default Modal;
