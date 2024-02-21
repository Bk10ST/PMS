import React from 'react'
import { Link } from 'react-router-dom'
import {
  Col
} from 'react-bootstrap'

import './Css-Desk/Entry.css'

const Entry = () => {
  return (
    
    <div className='entry-module'>
      <Col md={12}>
        <div className="text-modules">
          <div className="frontpage-title">
            <h2 className="big-text-module">
              KEEP YOUR LIFE ON TRACK, ONE TASK AT A TIME
            </h2>
            <p className="small-text-module">
              Get started today, start listing your daily activities and financial journal with organizMe
            </p>
          </div>
          <div className="getstarted-btn">
            <Link to="/sign">
              <button type="button" className="btn" id="start-sign-btn">
                Get Started
              </button>
            </Link>
          </div>  
        </div>
      </Col>
      <Col md={12}>
        <div className="image-container"></div>
      </Col>
    </div>
  )
}

export default Entry