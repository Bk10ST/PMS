import React from 'react'
import peronal from "./FrontpageAssests/todo.jpg";
import progress from "./FrontpageAssests/progress.jpg";
import account from "./FrontpageAssests/account.jpg";

import './Css-Desk/Reason.css'

const Reason = () => {
  return (
    <div className='reason-component'>
      <div className="reason-modules">
        <h2 className="reason-title">Reason to choose our site</h2>
      </div>
      <div className="card-container ">

        <div className="card" id='card-item' style={{ width: "18rem" }}>
          <img src={peronal} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Activities</h5>
            <p className="card-text">
              Manage Your Personal And Bussiness Activities.
            </p>
          </div>
        </div>

        <div className="card" id='card-item' style={{ width: "18rem" }}>
          <img src={progress} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Progress</h5>
            <p className="card-text">
              Map your Daily progress for improvement.
            </p>
          </div>
        </div>

        <div className="card" id='card-item' style={{ width: "18rem" }}>
          <img src={account} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Account</h5>
            <p className="card-text">
              Manage your Accounting activities for personal and bussiness.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Reason