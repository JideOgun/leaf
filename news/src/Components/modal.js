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
      return e.title === props.modalData;
    });

    return (
      <div className="card newsCard modalCard" >
        <div className="card-img">
          <img
            className="card-img"
            src={data[0].urlToImage}
            alt="stuff"
            style={{ width: "100%" }}
          />
        </div>
        {data[0].description}
        <br />
        <div className="modalAuthor"> {data[0].author ? data[0].author : "No Author"}</div>
        <div>Click anywhere to go back</div>
      </div>
    );
  };

  return (
    <div className="modal" onClick={props.onClose}>
      {selectedData()}
    
      
    </div>
  );
}

export default Modal;
