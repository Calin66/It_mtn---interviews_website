import React, { useEffect, useState } from "react";
import "./internships.css";
import { BsBuilding } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { CgToolbox } from "react-icons/cg";
import { GiLevelEndFlag } from "react-icons/gi";
import { db } from "./../firebase";
import { BsBookmark } from "react-icons/bs";
import Carousel from "react-elastic-carousel";

import Rating from "../components/Rating/Rating";

import { collection, getDocs, addDoc } from "firebase/firestore";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import InternshipInfo from "./InternshipInfo";

const Internship = () => {
  return (
    <div className="oferta-container">
      <h1>Beginner Web Developer</h1>
      <div style={{ marginBottom: "30px" }}>
        <BsBuilding id="b-icon" />
        <h2>Endava</h2>
      </div>
      <div>
        <GoLocation className="ic" />
        <h3>Location : </h3>
        <p>Work from Home</p>
      </div>
      <div style={{ alignItems: "flex-start", margin: "20px 0" }}>
        <CgToolbox className="ic" />
        <h3>Skills : </h3>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Express</li>
          <li>Redux</li>
        </ul>
      </div>
      <div>
        <GiLevelEndFlag className="ic" />
        <h3>Level :</h3>
        <p>Beginner</p>
      </div>
      <p id="more">Learn more...</p>
    </div>
  );
};
const Internships = () => {
  const [buttonRating, setButtonRating] = useState(false);
  const [forBlur, setForBlur] = useState(false);
  const [intInfo, setIntInfo] = useState(false);
  const [company, setCompany] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [location, setLocation] = useState("");
  const [newSkills, setNewSkills] = useState("");
  const [newLevel, setNewLevel] = useState("");
  const [newDone, setNewDone] = useState("");

  const [jobs, setJobs] = useState([]);
  const jobsCollectionRef = collection(db, "jobs");

  const createOffer = async () => {
    await addDoc(jobsCollectionRef, {
      comp: company,
      title: newTitle,
      loc: location,
      skills: newSkills,
      level: newLevel,
      done: newDone,
    });
  };
  const navigate = useNavigate();
  const handleMore = () => {
    setForBlur(!forBlur);
    setIntInfo(!intInfo);
  };
  const handleRating = () => {
    setButtonRating(!buttonRating);
    setForBlur(!forBlur);
  };
  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef);
      setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJobs();
  }, []);

  return (
    <div>
      <Rating trigger={buttonRating} changeView={handleRating} />
      <InternshipInfo tr={intInfo} ctr={handleMore} />
      {forBlur ? (
        <div style={{ filter: "blur(5px)" }}>
          <Navbar />
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Find your perfect internship according to your skills!</h1>
            <Carousel itemsToShow={1} style={{ marginTop: "100px" }}>
              {jobs.map((job) => {
                return (
                  <div className="oferta-container">
                    <h1>{job.title}</h1>
                    <div style={{ marginBottom: "30px" }}>
                      <BsBuilding id="b-icon" />
                      <h2>{job.comp}</h2>
                    </div>
                    <div>
                      <GoLocation className="ic" />
                      <h3>Location : </h3>
                      <p>{job.loc}</p>
                    </div>
                    <div style={{ alignItems: "flex-start", margin: "20px 0" }}>
                      <CgToolbox className="ic" />
                      <h3>Skills : </h3>
                      <ul>
                        <li>{job.skills}</li>
                        {/* <li>Javascript</li>
                    <li>React</li>
                    <li>Express</li>
                <li>Redux</li> */}
                      </ul>
                    </div>
                    <div>
                      <GiLevelEndFlag className="ic" />
                      <h3>Level :</h3>
                      <p>{job.level}</p>
                    </div>
                    <p id="more">Learn more...</p>
                    <BsBookmark
                      style={{
                        fontSize: "30px",
                        position: "absolute",
                        right: "2%",
                        top: "3%",
                      }}
                    />
                    {!job.done ? (
                      <button>Apply</button>
                    ) : (
                      <div id="rate" onClick={handleRating}>
                        Rate your experience at
                        <span style={{ fontWeight: "600", marginLeft: "7px" }}>
                          {job.comp}
                        </span>
                        !
                      </div>
                    )}
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "300px",
            }}
          >
            For Companies:
            <input
              placeholder="Company"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <input
              placeholder="Title"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <input
              placeholder="Location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <input
              placeholder="Skills"
              onChange={(e) => {
                setNewSkills(e.target.value);
              }}
            />
            <input
              placeholder="Level"
              onChange={(e) => {
                setNewLevel(e.target.value);
              }}
            />
            <input
              placeholder="Done"
              onChange={(e) => {
                setNewDone(e.target.value);
              }}
            />
            <button onClick={createOffer}> Create Listing </button>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ position: "relative", top: "120px" }}>
              Find your perfect internship according to your skills!
            </h1>
            <Carousel itemsToShow={1} style={{ marginTop: "90px" }}>
              {jobs.map((job) => {
                return (
                  <div className="oferta-container">
                    <h1>{job.title}</h1>
                    <div style={{ marginBottom: "30px" }}>
                      <BsBuilding id="b-icon" />
                      <h2>{job.comp}</h2>
                    </div>
                    <div>
                      <GoLocation className="ic" />
                      <h3>Location : </h3>
                      <p>{job.loc}</p>
                    </div>
                    <div style={{ alignItems: "flex-start", margin: "20px 0" }}>
                      <CgToolbox className="ic" />
                      <h3>Skills : </h3>
                      <ul>
                        <li>{job.skills}</li>
                        {/* <li>Javascript</li>
                    <li>React</li>
                    <li>Express</li>
                <li>Redux</li> */}
                      </ul>
                    </div>
                    <div>
                      <GiLevelEndFlag className="ic" />
                      <h3>Level :</h3>
                      <p>{job.level}</p>
                    </div>
                    <p id="more" onClick={handleMore}>
                      Learn more...
                    </p>
                    <BsBookmark
                      style={{
                        fontSize: "30px",
                        position: "absolute",
                        right: "2%",
                        top: "3%",
                      }}
                    />
                    {!job.done ? (
                      <button>Apply</button>
                    ) : (
                      <div id="rate" onClick={handleRating}>
                        Rate your experience at
                        <span style={{ fontWeight: "600", marginLeft: "7px" }}>
                          {job.comp}
                        </span>
                        !
                      </div>
                    )}
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "300px",
            }}
          >
            For Companies:
            <input
              placeholder="Company"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <input
              placeholder="Title"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <input
              placeholder="Location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <input
              placeholder="Skills"
              onChange={(e) => {
                setNewSkills(e.target.value);
              }}
            />
            <input
              placeholder="Level"
              onChange={(e) => {
                setNewLevel(e.target.value);
              }}
            />
            <input
              placeholder="Done"
              onChange={(e) => {
                setNewDone(e.target.value);
              }}
            />
            <button onClick={createOffer}> Create Listing </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;
