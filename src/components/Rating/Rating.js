import React from "react";
import "./Rating.css";
import { IoClose } from "react-icons/io5";
function Rating(props) {
  return props.trigger ? (
    <div className="container-r">
      <div id="cr">
        <h1>Tell us about your experience</h1>
        <input placeholder="Title" className="review-info" />
        <textarea placeholder="Description" className="review-info" id="rv-r" />
      </div>
      <IoClose id="rev-close" onClick={props.changeView} />
      <button>Submit</button>
    </div>
  ) : (
    ""
  );
}

export default Rating;
