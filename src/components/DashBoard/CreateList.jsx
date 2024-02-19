import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./Dash-css/CreateList.css"

const CreateList = () => {
 const [list, setList] = useState(true);
  return (
    <div className="me-auto">
      <div className="text-center">Create list </div>
      <button className="create-btn" onClick={list}>
        Create list
      </button>
      <div >
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">List 1</ListGroup.Item>
        <ListGroup.Item as="li">List 2</ListGroup.Item>
        <ListGroup.Item as="li">List 3</ListGroup.Item>
      </ListGroup>
      </div>
    </div>
  );
};

export default CreateList;
