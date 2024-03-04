import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider, useAccordion } from "@chakra-ui/react";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import PrivateAuth from "./components/auth/PrivateAuth";
import FrontPage from "./components/Landingpage/frontpage/Frontpage";
import Guide from "./components/Landingpage/Guide/Guide";
import Dashboard from "./components/DashBoard/Dashboard";
import Profile from "./components/DashBoard/Profile";
import Yourlist from "./components/DashBoard/Yourlist";
import Setting from "./components/DashBoard/Setting";
import Logout from "./components/DashBoard/Logout";
import { Blog } from "./components/Landingpage/Blog/Blog";
import CreateList from "./components/DashBoard/CreateList";
import { DndContext, closestCorners } from "@dnd-kit/core";

import "./App.css";

const App = () => {

  return (
    <DndContext collisionDetection={closestCorners}>
      <ChakraProvider>
        <Router>

          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="guide" element={<Guide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
            <Route path="sign" element={<SignUp />} />

            <Route path="private-auth" element={<PrivateAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="create-list" element={<CreateList />} />
            <Route path="your-list" element={<Yourlist />} />
            <Route path="setting" element={<Setting />} />
            <Route path="logout" element={<Logout />} />

          </Routes>
        </Router>
      </ChakraProvider>
    </DndContext>
  );
};

export default App;
