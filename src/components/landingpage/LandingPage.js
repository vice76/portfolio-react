import React from "react";
import ScrollDown from "../scrolldown/ScrollDown";

const Landingpage = () => {
  return (
    <div className="mainpage">
      <div className="mainpage_left">
        <div className="mainpage_content">
          <h1>Non-Awarded </h1>
          <h1>Web</h1>
          <h1>Developer</h1>
          <h4>But, hey no one cares about that.</h4>
          <div className="meet">
            <span>👇</span>
            <p id="name">Meet Arpit Yadav</p>
          </div>
          <div className="scrolldown">
            <ScrollDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
