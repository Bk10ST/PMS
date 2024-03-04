import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import { FaEdit, FaLongArrowAltRight } from "react-icons/fa";
import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from "@chakra-ui/react";

import '../DashBoard/Dash-css/List.css';

const parseJson = (key) => {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

const setJson = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function Droppable(props, todos) {
  const { isOver, setNodeRef, listeners, attributes, } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'red' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children} {todos && todos.length > 0 ? (
        <div className="tasks-list">
          {todos.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : ''}
            </Droppable>
          ))}
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export function Draggable(props, todos) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children} {todos && todos.length > 0 ? (
        <div className="tasks-list">
          {todos.map((id) => (
            <div>
              <ul className='tasks'>
                <li>Title: <b>{item.title}</b> </li>
                <li>Description :<b> {item.description} </b></li>
                <li>StartingDate : <b> {item.startingDate} </b></li>
                <li>EndingDate : <b> {item.endingDate} </b></li>
                <div className='icons-list'>
                  <Button color={'white'} size='sm' onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </Button>
                  <Button color={'white'} size='sm' className='ms-3'>
                    <FaEdit />
                  </Button>
                </div>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export function TaskList(todos) {
  return (
    <div className="list">
      {parent === null ? draggableMarkup : null}
      {todos && todos.length > 0 ? (
        <div className="tasks-list">
          {todos.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : ''}
            </Droppable>
          ))}
        </div>
      ) : (
        <div className="list-err">
          Nothing to Show
        </div>
      )}
    </div>
  )
}

const Yourlist = () => {
  const [todos, setTodos] = useState(parseJson('todoList'));
  const [parent, setParent] = useState(null);
  const [smallBox, setSmallBox] = useState([1, 2, 3, 4])

  const handleDelete = (index) => {
    const updatedParse = todos.filter((_, i) => i !== index);
    setTodos(updatedParse);
    setParent('todoList', updatedParse);
  }

  const handleDrop = (event) => {
    const { over } = event;
    const id = parseInt(event.active.id);

    if (parent !== null) return;
    setParent(over ? over.id : null);
  };


  const draggableMarkup = todos.map((item, index) => (
    <Draggable key={index} id={index}>
      <smallBox>
        <ul className='tasks'>
          <li>Title: <b>{item.title}</b> </li>
          <li>Description :<b> {item.description} </b></li>
          <li>StartingDate : <b> {item.startingDate} </b></li>
          <li>EndingDate : <b> {item.endingDate} </b></li>
          <div className='icons-list'>
            <Button color={'white'} size='sm' onClick={() => {
              console.log("Deleting item at index:", index);
              handleDelete(index);
            }}>
              <DeleteIcon />
            </Button>
            <Button color={'white'} size='sm' className='ms-3'>
              <FaEdit />
            </Button>

          </div>
        </ul>
      </smallBox>
    </Draggable>
  ));
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='your-list'>
        <h1 className='text-center pt-3'>List Section</h1>

        <div className='d-flex justify-content-end'>
          <Button background={'white'} size='sm' marginRight={'10px'}  >
            <FaEdit />
          </Button>
          <Link to='/create-list'>
            <Button background={'white'} size='sm' marginRight={'10px'} >
              Go to Create List <FaLongArrowAltRight className="ms-2" />
            </Button>
          </Link>
        </div>
        <hr />
        <Container>
          <Row>
            <div className="list">
              {parent === null ? draggableMarkup : null}
              {todos && todos.length > 0 ? (
                <div className="tasks-list">
                  {todos.map((id) => (
                    <Droppable key={id} id={id}>
                      {parent === id ? draggableMarkup : ''}
                    </Droppable>
                  ))}
                </div>
              ) : (
                <div className="list-err">
                  Nothing to Show
                </div>
              )}
            </div>
            <TaskList todos={todos} />
            <TaskList todos={todos} />
          </Row>
        </Container>
      </div>
    </DndContext>
  )
}
const handleDragEnd = (event) => {
  const { over } = event;
  setParent(over ? over.id : null);
}

export default Yourlist;
