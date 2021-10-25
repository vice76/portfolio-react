import React from "react";
import ScrollDown from "../scrolldown/ScrollDown";

const Landingpage = () => {
  return (
    <div className="mainpage">
      <div className="mainpage_left">
        <h1>Non-Awarded Web Developer</h1>
        <h4>But, hey no one cares about that.</h4>
        <div className="meet">
          <span>👇</span>
          <p>Meet Arpit Yadav</p>
        </div>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Landingpage;
