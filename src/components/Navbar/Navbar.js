import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../firebase";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase";

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
            {/* <img src="img/logo.png" style={{height:"100px"}} /> */}
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
        <div id="user-container">
          <div className="user-name-icon" onClick={() => setOpenSide(true)}>
            <p className="user-name">Acica</p>
            <FaRegUserCircle className="user-icon" />
          </div>
          <div id="user-options">
            <p>Detalii cont</p>
            <p>Favorite</p>
            <p>Cv</p>
            <p id="logout" onClick={handleLogout}>
              Log out
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
      )}
    </div>
  );
};

export default Navbar;
