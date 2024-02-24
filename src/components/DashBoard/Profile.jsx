import React, { useState } from "react";
import User from "../../assets/images/footerImg.jpg";
import "./Dash-css/Profile.css";
import { Chart } from "react-google-charts";
import Calendar from "./Calender";
import Dashboard from "./Dashboard";


const Profile = () => {
 
  return (
    <div className="profile-department">
      {/* <Dashboard/> */}
      <div className="card" style={{ width: "18rem" }} id="profle-box">
        <img src={User} className="card-img-top" alt="..." id="profile-img" />
        <div className="card-body" id="profile-box-text">
          <p className="card-text">
            <strong>Sandesh Bk</strong>
          </p>
          <p className="card-text">
            <strong>I am a Developer</strong>
          </p>
        </div>
      </div>

      <div className="task-progress-container">
        <div
          className="card"
          id="task-Details"
          style={{
            width: "18rem",
            height: "9rem",
            borderRadius: "15px",
            backgroundColor: "#7B61FF",
            color: "white",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">6</h5>
            <p
              className="card-text"
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              List Of task
            </p>
            <a
              href="#"
              className="btn"
              style={{
                color: "white",
                border: "2px solid white",
                width: "30%",
                height: "30%",
                fontSize: "90%",
                paddingBottom: "5%"
              }}
              id="view"
            >
              View
            </a>
          </div>
        </div>

        <div
          className="card"
          id="task-Details"
          style={{
            width: "18rem",
            height: "9rem",
            borderRadius: "15px",
            backgroundColor: "#7B61FF",
            color: "white",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">7</h5>
            <p
              className="card-text"
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              List Of task
            </p>
            <a
              href="#"
              className="btn"
              style={{
                color: "white",
                border: "2px solid white",
                width: "30%",
                height: "30%",
                fontSize: "90%",
                paddingBottom: "5%"
              }}
              id="view"
            >
              View
            </a>
          </div>
        </div>


        <div
          className="card"
          id="task-Details"
          style={{
            width: "18rem",
            height: "9rem",
            borderRadius: "15px",
            backgroundColor: "#7B61FF",
            color: "white",
            marginTop: "3%"
          }}
        >
          <div className="card-body">
            <h5 className="card-title">8</h5>
            <p
              className="card-text"
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              List Of task
            </p>
            <a
              href="#"
              className="btn"
              style={{
                color: "white",
                border: "2px solid white",
                width: "30%",
                height: "30%",
                fontSize: "90%",
                paddingBottom: "5%",
              }}
              id="view"
            >
              View
            </a>
          </div>
        </div>

      </div>

      {/* <div
        style={{ width: "100%", maxWidth: 600, height: 500 }}
        className="task-graph"
      >
        <Chart
          chartType="BarChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
      </div> */}

      <div className="calender-section">
        <Calendar />
      </div>
    </div>
  );
};

export default Profile;
