import React from 'react'
import './Css-Desk/Frontpage.css'
import { Link } from 'react-router-dom'
import './Css-Desk/Entry.css'
import Navbar from '../Navbar/Navbar'


const Entry = () => {
  return (
    <div className='entry-module'>
        {/* <Navbar /> */}
          <div className="text-modules">
        <div className="frontpage-title">
          <h2 className="big-text-module">
            KEEP YOUR LIFE IN TRACK , ONE TASK AT A TIME
          </h2>
          <p className="small-text-module">
            Get started today , start listing your daily activities and
            financial journal with organizMe
          </p>
        </div>
        <div className="getstarted-btn">
          <button type="button" className="btn" id="start-sign-btn">
            <Link to="/sign">GET STARTED</Link>
          </button>
        </div>
      </div>
      <div className="image-container"></div>

    </div>
  )
}

export default Entry