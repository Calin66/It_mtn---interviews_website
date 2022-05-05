import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./DetaliiCont.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const DetaliiCont = () => {
  const [about, setAbout] = useState(false);
  return (
    <>
      <Navbar />
      <div className="detalii-cont">
        <div className="cont-optiuni">
          <ul
            style={{ textDecoration: "none", listStyle: "none" }}
            className="optiuni"
          >
            <li onClick={() => setAbout(!about)}>About me</li>
            <li>Done interships</li>
            <li>Account</li>
            <li>Security</li>
          </ul>
        </div>
        {about ? (
          <div id="opt-cont">
            <div className="optiune-cont">
              <h1>Name</h1>
              <p>Ciobanu Calin</p>
              <h1>Skills</h1>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
              <h1>Level</h1>
              <p>Beginner</p>
              <h1>What do you want to learn/practice?</h1>
              <ul>
                <li>Backend</li>
                <li>React</li>
              </ul>
              <h1>Do you have any company preferences?</h1>
              <ul>
                <li>Not</li>
              </ul>
            </div>
            <div className="done-j">
              <h1>Personal projects</h1>
              <ul className="projects">
                <li>
                  <a
                    target="_blank"
                    href="https://dezmembrari-pieseauto.ro/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    Site dezmembrari auto
                  </a>
                </li>
              </ul>
              <h1 style={{ marginTop: "20px", marginBottom: "10px" }}>
                My Rating
              </h1>
              <div
                style={{ color: "orange", display: "flex", fontSize: "25px" }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar style={{ color: "grey" }} />
              </div>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginTop: "20px",
                  fontSize: "25px",
                  borderBottom: "1px solid grey",
                }}
                to="/creeazacv"
              >
                Create CV
              </Link>
              <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Integrations
              </h1>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "40px" }}>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    style={{ color: "darkgreen" }}
                  >
                    <BsGithub className="integ" />
                  </a>
                </div>
                <div>
                  <a href="https://ro.linkedin.com/" target="_blank">
                    <BsLinkedin
                      className="integ"
                      style={{ color: "rgb(39, 176, 255)" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      ;
    </>
  );
};

export default DetaliiCont;
