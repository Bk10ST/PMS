import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import PrivateAuth from "./components/auth/PrivateAuth";
import FrontPage from "./components/Landingpage/frontpage/Frontpage";
import Navbar from "./components/Landingpage/Navbar/Navbar";
import Blog from "./components/Landingpage/Blog/Blog";
import Guide from "./components/Landingpage/Guide/Guide";
import Dashboard from "./components/DashBoard/Dashboard";
import Profile from "./components/DashBoard/Profile";
import CreateList from "./components/DashBoard/CreateList";
import Yourlist from "./components/DashBoard/Yourlist";
import Setting from "./components/DashBoard/Setting";
import Logout from "./components/DashBoard/Logout";
import Frontpage from "./components/Landingpage/frontpage/Frontpage";


const App = () => {
  return (
    <div>
      <ChakraProvider>
       <Router>
        <Routes>
          <Route path="/" element={<Frontpage/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<SignUp/>}/>
          <Route path="/private-auth" element={<PrivateAuth/>}/>
          <Route path="/dashboard" element={<Profile/>}/>
          <Route path="/createList" element={<CreateList/>}/>
          <Route path="/your-list" element={<Yourlist/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
       </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
