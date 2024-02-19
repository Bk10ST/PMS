import React from "react";
import "./Css-Desk/Frontpage.css";
import Entry from "./Entry";
import Reason from './Reason.jsx'
import Description from './Description.jsx'
import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";




const Frontpage = () => {
  return (
    <div className="frontpage-module">
      <Navbar />
    <Entry/>
<div className="item-component">
<Reason/>
</div>
<Description/>
<Todo/>
{/* <Footer/> */}
    </div>
  );
};

export default Frontpage;
 