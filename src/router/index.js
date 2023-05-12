import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Navbar from "../components/Navbar";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Guest from "../middleware/Guest";
import Dashboard from "../views/Dashboard";
import Authenticated from "../middleware/Authenticated";

function RouterIndex() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <Authenticated>
                <Dashboard />
              </Authenticated>
            }
          />

          <Route
            path="/login"
            element={
              <Guest>
                <Login />
              </Guest>
            }
          />

          <Route
            path="/register"
            element={
              <Guest>
                <Register />
              </Guest>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterIndex;
