import React from 'react'
import { Link } from 'react-router-dom'
import List from "./icon/Vector.png";
import Financial from "./icon/Vector (1).png";
import Oragnize from "./icon/organize.png";
import Anlyze from "./icon/Group (1).png";

import './Css-Desk/Todo.css'


const Todo = () => {
  return (
    <div className='todo-lists'>
      <div className="box-module pb-3">
        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
          id="#list-logo"
        >
          <img src={List} className="card-img-top custom-img" alt="..." />
          <div className="card-body" id='card-module'>
            <p className="card-text" id="customize-text">
              REMEBER TASK.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Anlyze} className="card-img-top custom-img" alt="..." />
          <div className="card-body" id='card-module'>
            <p className="card-text" id="customize-text">
              ANAYLIZE YOUR TASK.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Financial} className="card-img-top custom-img" alt="..." />
          <div className="card-body " id='card-module'>
            <p className="card-text" id="customize-text">
              RECORD YOUR FINANCIAL HISTORY.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Oragnize} className="card-img-top custom-img" alt="..." />
          <div className="card-body" id='text-section'>
            <p className="card-text" id="customize-text">
              BE ORGANIZE.
            </p>
          </div>
        </div>
      </div>
      <div className="guide-module">
        <h2>Creating a todo-list will help in development</h2>
        <p className="custom-text">
          To Do list is vitally important because it helps you to prioritize.
          There are many things you could be doing. You can write down a To Do
          list with probably 50 things on it, not too much of a trouble. There’s
          always plenty to do in life, and more and more things happen as your
          day goes on. You’ll constantly be adding to a To Do list. The good
          thing about having a list is that you can remeber. It’s very easy to
          look at all the things that are on the list and then choose what’s
          most important or what’s going to be the best use of your time.
        </p>
      </div>


    </div >
  )
}

export default Todo