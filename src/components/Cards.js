import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Cateva exmeple de intership-uri disponibile</h1>
      <div className="cards__container">
        <div>
          <p>
            Description - Develop components/applications for desktop or web on
            windows platform - Architect, develop, test, applications according
            functional specifications - Produce detailed technical specs, flows,
            UML diagrams, proof of concept apps, mockups - Technical guidance
            and work closely with designated team for achieving goals
          </p>
          <h1>Senior Web Developer</h1>
          <img src="img/senior.png" />
        </div>
        <div>
          <img src="img/developer C#.png" />
          <p>
            Description - Develop components/applications for desktop or web on
            windows platform - Architect, develop, Test, applications according
            functional specifications - Produce detailed technical specs, flows,
            UML diagrams, proof of concept apps, mockups
          </p>
          <h1>Software Developer C#</h1>
        </div>
        <div>
          <img src="img/shoreline1.png" />
          <p>
            Shoreline gives users a path to automation with a CLI for debugging
            and immediate issue resolution. Shoreline allows users to capture a
            debug and repair session in a Jupyter-style notebook built for
            on-call. Then, share notebooks with your entire team to safely fix
            issues using a list of pre-approved repair actions. Finally, when
            you are confident that you have precisely matched the repair action
            to the alarm, you can automate away common issues permanently.
          </p>
          <h1>Solves coding problems</h1>
        </div>
        <div>
          <img src="img/shoreline2.png" />
          <p>
            Shoreline is helping software engineers and site reliability
            engineers take the toil out on-call. We make it easy to debug new
            issues in the moment and then automate them away forever. Shoreline
            runs across clouds, VMs, and containers and lets you manage your
            fleet as if it were a single box. Shoreline is working with large
            and hyper-growth companies like EA, Domino Data Lab, TigerGraph, and
            Incorta
          </p>
          <h1>Solves coding problems</h1>
        </div>
      </div>
    </div>
  );
}
export default Cards;
