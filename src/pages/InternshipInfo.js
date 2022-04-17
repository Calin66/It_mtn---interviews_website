import React from "react";
import { BsBuilding } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { CgToolbox } from "react-icons/cg";
import { GiLevelEndFlag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./intI.css";
function InternshipInfo(props) {
  return props.tr ? (
    <div>
      <h1
        style={{
          position: "absolute",
          left: "400px",
          top: "100px",
          zIndex: "101",
          fontWeight: "500",
        }}
      >
        InternshipInfo
      </h1>
      <div id="intI">
        <img
          src="img/centris.jpg"
          style={{ width: "100%", objectFit: "cover", height: "45%" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "20px",
            fontSize: "20px",
            left: "20px",
          }}
        >
          <BsBuilding style={{ color: "white", fontSize: "30px" }} />
          <h1 id="sabs">Sabs</h1>
        </div>
        <div
          style={{
            color: "white",
            position: "relative",
            top: "40px",
            left: "30px",
          }}
        >
          <h2>How to prepare?</h2>
          <ul>
            <li>Previous relevant software testing experience</li>
            <li>
              Experience with database analysis tools desired, but not mandatory
            </li>
            <li>
              Experience with tracking tools (JIRA) and test case management
              tools
            </li>
            <li>Good ability to communicate in English (speak, read, write)</li>
            <li>
              Very good communication skills, problem solving attitude,
              flexibility, team work spirit
            </li>
          </ul>
          <h2>Benefits</h2>
          <ul>
            <li>Gain experience with real life application</li>
            <li>Gain experience with real life application</li>
          </ul>
        </div>
        <IoClose id="int-close" onClick={props.ctr} />
      </div>
    </div>
  ) : (
    ""
  );
}

export default InternshipInfo;
