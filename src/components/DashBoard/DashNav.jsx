import React from "react";
import "./Dash-css/DashNav.css";
import { Link } from "react-router-dom";
import logo from "./Dash-assests/white.png";
import useDashHook from "./CustomHooks/DashHook";


const DashNav = () => {
  const { toggleButton, hideTopBar, toggleBtn } = useDashHook();
  return (
    <div>
      <div className="sidebar" >
        <div className="container">
          <a className="navbar-brand" id="navbar-brand" to="#">
            <img src={logo} alt="Bootstrap" width={27} height={20} className="dash-img" />
            <strong className="brand-text">OrganizeMe</strong>
          </a>
        </div>
        {hideTopBar && (
          <div className="toggle-btn">
            <button type="button" onClick={toggleButton}>
              Menu
            </button>
          </div>
        )}

        {toggleBtn && (
          <div className="container-items">
            <Link className="active" to="/profile">
              <i
                className="fa-solid fa-user"
                style={{
                  color: "white",
                  marginRight: "10%",
                }}
                id="dash-Icon"
              ></i>
              Profile
            </Link>
            <Link to="/createlist">
              <i
                className="fa-solid fa-plus-minus"
                style={{
                  color: "white",
                  marginRight: "10%",
                }}
                id="dash-Icon"
              ></i>
              Create-list
            </Link>
            <Link to="/yourlist">
              <i
                className="fa-solid fa-folder"
                style={{
                  color: "white",
                  marginRight: "10%",
                }}
                id="dash-Icon"
              ></i>
              Your-list
            </Link>
            <hr className="border" />
            <Link to="/setting">
              <i
                className="fa-solid fa-gear"
                style={{
                  color: "white",
                  marginRight: "10%",
                }}
                id="dash-Icon"
              ></i>
              Setting
            </Link>
            <Link to="/">
              <i
                className="fa-solid fa-right-from-bracket"
                style={{
                  color: "white",
                  marginRight: "10%",
                }}
                id="dash-Icon"
              ></i>
              Logout
            </Link>
          </div>
        )}

        {
          !toggleBtn && (
            <div className="container-items">
              <Link className="active" to="/profile">
                <i
                  className="fa-solid fa-user"
                  style={{
                    color: "white",
                    marginRight: "10%",
                    // backgroundColor: "#e3e7e6"
                  }}
                  id="dash-icon"
                ></i>
                Profile
              </Link>
              <Link to="/createlist">
                <i
                  className="fa-solid fa-plus-minus"
                  style={{
                    color: "white",
                    marginRight: "10%",
                    // backgroundColor: "#7B61FF"
                  }}
                ></i>
                Create-list
              </Link>
              <Link to="/yourlist">
                <i
                  className="fa-solid fa-folder"
                  style={{
                    color: "white",
                    marginRight: "10%",
                    // backgroundColor: "#7B61FF"
                  }}
                ></i>
                Your-list
              </Link>
              <hr className="border" />
              <Link to="/setting">
                <i
                  className="fa-solid fa-gear"
                  style={{
                    color: "white",
                    marginRight: "10%",
                    // backgroundColor: "#7B61FF"
                  }}
                ></i>
                Setting
              </Link>
              <Link to="/">
                <i
                  className="fa-solid fa-right-from-bracket"
                  style={{
                    color: "white",
                    marginRight: "10%",
                    // backgroundColor: "#7B61FF"
                  }}
                ></i>
                Logout
              </Link>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default DashNav;
