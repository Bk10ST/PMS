import React from "react";
import "./Css-Desk/Frontpage.css";
import Entry from "./Entry";
import Reason from './Reason.jsx'
import Description from './Description.jsx'
import Todo from "./Todo.jsx";

const Frontpage = () => {
  return (
    <div className="frontpage-module">
    <Entry/>
<div className="item-component">
<Reason/>
</div>
<Description/>
<Todo/>
    </div>
  );
};

export default Frontpage;
 