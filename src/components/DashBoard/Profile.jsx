import React, { useState } from "react";
import "./Dash-css/Profile.css";
import Dashboard from "./Dashboard";
import Taskimg from "./Dash-assests/task.png";
import CompleteImg from "./Dash-assests/complete.png";
import PendingImg from "./Dash-assests/pending.png";
import { Chart } from "react-google-charts";
import User from './Dash-assests/user.jpg'
import Calender from './Calender'
import useTotalTask from "./CustomHooks/TotalTask";


const Profile = () => {
  
  const data = [
    ["week", "task"],
    ["Sunday", 90],
    ["Monday", 55],
    ["Tuesday", 100],
    ["Wednesday", 44],
    ["Thursday", 24],
    ["Friday", 15],
    ["Saturday", 15],
  ];

  const options = {
    title: "Your Per Day Task",
    chartArea: { width: "80%", height: "80%", backgroundColor: "e3e7e6" },
    hAxis: { title: "week", minValue: 0 },
    vAxis: { title: "task bar" },
    backgroundColor: "#e3e7e6",
    colors: ["7B61FF"],
  };

  return (
    <div className="profile-module">
      <Dashboard />
      <div className="profile-container">
        <h2 className="welcome-banner">Welcome Admin !</h2>
        <p className="sub-title">DashBoard</p>
        <img src={User} alt="" className="user-img"/>

        <div className="list-detail-box">
        <div className="card text-end" style={{ width: "14rem" , border: "10px solid white"}}>
            <div className="card-body">
              <h5 className="card-title" id="task-quantity">
           10
              </h5>
              <p className="card-text" id="task">
                Total Task
              </p>
              <img src={Taskimg} alt="" className="task-img" />
            </div>
          </div>


          <div className="card text-end" style={{ width: "14rem", border: "10px solid white" }}>
            <div className="card-body">
              <h5 className="card-title" id="task-quantity">
                10
              </h5>
              <p className="card-text" id="task">
                Complete
              </p>
              <img src={CompleteImg} alt="" className="task-img" />
            </div>
          </div>

          <div className="card text-end" style={{ width: "14rem", border: "10px solid white" }}>
            <div className="card-body">
              <h5 className="card-title" id="task-quantity">
                10
              </h5>
              <p className="card-text" id="task">
                Pending
              </p>
              <img src={PendingImg} alt="" className="task-img" />
            </div>
          </div>

          <div className="card text-end" style={{ width: "14rem" , border: "10px solid white"}}>
            <div className="card-body">
              <h5 className="card-title" id="task-quantity">
                10
              </h5>
              <p className="card-text" id="task">
                Task
              </p>
              <img src={Taskimg} alt="" className="task-img" />
            </div>
          </div>
        </div>

        <div className="calender-section">
        <Calender/>
      </div>

        <div
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
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
