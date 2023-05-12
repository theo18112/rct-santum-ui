import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";
import axios from "axios";

function Navbar() {
  const [auth, setAuth] = useRecoilState(authenticated);
  const logout = async () => {
    try {
      let response = await axios.post("logout");
      setAuth({ check: false });
      localStorage.removeItem("tokenUser");
      alert(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>
            {auth.check ? (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {auth.user.name}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
