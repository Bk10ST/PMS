import React from 'react'
import { CreateList } from './CreateList';
import { Container, Row } from 'react-bootstrap';

import '../DashBoard/Dash-css/List.css';

const Yourlist = () => {
  const { handleSubmit } = CreateList();
  return (
    <div className='your-list'>
      <Container>
        <Row>
          <h1 className='text-center pt-3'>List Section</h1>
          <div className="list">
            <h3>Title</h3>
            <div className="tasks ">
              hlo task
            </div>
            <div className="tasks">
              hlo task
            </div>
            <div className="tasks">
              hlo task
            </div>
            <div className="tasks">
              hlo task
            </div>
          </div>
          <div className="list">
          <h3>Title</h3>
            <div className="tasks ">
              hlo task
            </div>
            <div className="tasks ">
              hlo task
            </div>
            <div className="tasks ">
              hlo task
            </div>
          </div>
          <div className="list">
            hello
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Yourlist