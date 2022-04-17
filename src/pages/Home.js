import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";
import Cards from "../components/Cards";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "background-color: #333C83",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
      }}
    >
      <Navbar />
      <img
        style={{ objectFit: "cover", width: "100%", height: "800px" }}
        src="img/poza.jpg"
        alt=""
      />
      <div id="content">
        <h1 id="titlu">Cine suntem noi?</h1>
        <ul>
          <li>
            Suntem un colectiv care doreste sa ii ajute pe liceeni si tineri
            studenti sa isi gaseasca dream job-ul
          </li>
          <li>
            Acceptam orice nivel de cunostinte si vrem sa va ajutam sa ajunge-ti
            mai departe
          </li>
          <li>
            Oferim ajutor atat elevilor/sudentior cat si companiilor care doresc
            sa gasesca oameni seriosis
          </li>
        </ul>
      </div>

      <div id="sponsori">
        <h1>Sponsorii Nostri</h1>
        <div
          id="poze"
          style={{
            display: "flex",
            alignItems: "space-between",
            width: "80%",
            justifyContent: "space-between",
            marginLeft: "8%",
            marginBottom: "6%",
          }}
        >
          <img src="img/sabs.png" alt="" />
          <img src="img/shoreline logo.png" alt="" style={{ right: "70%" }} />
        </div>
      </div>
      <Cards style={{ position: "absolute", top: "200px" }} />
    </div>
  );
}

export default Home;
