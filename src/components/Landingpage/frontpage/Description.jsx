import React from 'react'
import { Link } from 'react-router-dom'

import frame from "./FrontpageAssests/Frame5.png";
import './Css-Desk/Description.css' 

const Description = () => {
  return (
    <div>
        
      <div className="description">
        <img src={frame} alt="" className="frame-img" />
        <div className="description-items">
          <h2 className="descp-text">
            Plane thing carefully To keep things neat
          </h2>
          <p className="desp-text">
            Our website helps to keep your task and acoounting history well
            managed. You can calculate your day to day progress by analizing the
            list. We keep your private data like passowrd , bank details and
            other private information as well as image secure from being miss
            placed or thief . Our system is overall Package for managing person
            / bussiness acrtivties , account history , secreate data. You can
            vist our blog section to get more detaiils about our platform
          </p>
          <button type="button" className="btn btn-primary" id="blog-btn">
            <Link to="/blog">Blog</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Description