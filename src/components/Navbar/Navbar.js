import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../firebase";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase";

import { BiMessageAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { getAuth } from "firebase/auth";
const Navbar = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const currentUser = useAuth();
  const [openSide, setOpenSide] = useState(false);
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div id="navigatie">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", marginRight: "100px" }}>
          <div id="logo_sigla">
            <img
              src="img/logo.png"
              style={{
                height: "35px",
                position: "absolute",
                left: "40px",
                top: "20px",
              }}
            />
            <h1>Internship Assistant</h1>
          </div>
        </Link>
        <Link
          to="/internships"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1>Internships</h1>
        </Link>
      </div>
      {!currentUser ? (
        <Link to="/signup">
          <button id="sign">Sign up!</button>
        </Link>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "200px",
            }}
          >
            <div id="notifications">
              <FiBell
                id="bell"
                className="user-icon"
                style={{
                  fontSize: "27px",
                  position: "absolute",
                  right: "500px",
                  top: "25px",
                  cursor: "pointer",
                }}
              />
            </div>
            <BiMessageAlt
              className="user-icon"
              style={{
                color: "white",
                fontSize: "30px",
                marginRight: "130px",
                position: "relative",
                top: "1px",
                cursor: "pointer",
              }}
            />
          </div>
          <div id="user-container">
            <div className="user-name-icon" onClick={() => setOpenSide(true)}>
              <p className="user-name">
                {currentUser.displayName ? currentUser.displayName : "Username"}
              </p>
              <FaRegUserCircle className="user-icon" />
            </div>
            <div id="user-options">
              <p>Mesaje</p>
              <p>Notificari</p>
              <Link
                to="/detaliicont"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>User details </p>
              </Link>
              <p>Done</p>
              <p>Saved</p>

              <p id="logout" onClick={handleLogout}>
                Logout
                <BiExit
                  style={{
                    fontSize: "24px",
                    position: "relative",
                    top: "6px",
                    left: "10px",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
