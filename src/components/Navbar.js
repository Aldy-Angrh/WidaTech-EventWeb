import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcElectricalSensor } from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "../asset/css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo">
            <FcElectricalSensor className="navbar-icon" /> Wida Tech
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-links">
                Create Event
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-links">
                List Event
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">Get Started</Button>
                </Link>
              ) : (
                <Link to="sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Get Started
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
