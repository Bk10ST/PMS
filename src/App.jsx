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
import Default from "./components/layout/Default";

const App = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="guide" element={<Guide />} />
                    <Route path="login" element={<Login />} />
                    <Route path="sign" element={<SignUp />} />
                    <Route path="private-auth" element={<PrivateAuth />} />
                  </Routes>
                </>
              }
            />
              <Route path="/dashboard" element={<Default />}>
              <Route path="profile" element={<Profile />} />
              <Route path="createlist" element={<CreateList />} />
              <Route path="yourlist" element={<Yourlist />} />
              <Route path="setting" element={<Setting />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
