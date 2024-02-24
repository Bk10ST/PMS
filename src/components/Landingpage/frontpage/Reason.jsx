import React from 'react'
import { categories } from '../../mock/data';
import { Link } from 'react-router-dom';

import './Css-Desk/Reason.css'

const Reason = () => {
  const title = 'Reason to choose our site'
  return (
    <div className='reason-component'>
      <div className="reason-modules">
        <h2 className="reason-title">{title}</h2>
      </div>
      <div className="card-container ">
        {categories.map((item, index) => (
          <div className="card-reason" id='card-item' key={index} >
            <img src={item.image} className="card-img-top" alt="reason-img" />
            <div className="card-body pt-3">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text pt-2">
                {item.description}
              </p>
              <div className='btn-reason'>
              <Link to='/sign'>
              <button className='btn' id="start-sign-btn">Get Started</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Reason