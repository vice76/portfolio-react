import React, { useRef, useEffect } from "react";
import ScrollDown from "../scrolldown/ScrollDown";
import gsap from "gsap";

const Landingpage = () => {
  const mainpage_leftRef = useRef();
  const mainpage_contentRef = useRef();
  const hero_desginRef = useRef();
  useEffect(() => {
    gsap.from(mainpage_leftRef.current, {
      y: "-30%",
      opacity: 0,
      duration: 2,
      ease: "Power4.easeOut",
    });
    gsap.from(
      mainpage_contentRef.current,
      {
        y: "-50",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "Power4.easeOut",
      },
      "-=1.5"
    );
    gsap.to(hero_desginRef.current, {
      y: "-80",
      duration: 2,
      stagger: 0.2,
      ease: "bounce.easeOut",
    });
  });
  return (
    <div className="mainpage">
      <div className="mainpage_left" ref={mainpage_leftRef}>
        <div className="mainpage_content" ref={mainpage_contentRef}>
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
          <div className="mainpage_anime">
            <svg
              width={421}
              height={422}
              fill="none"
              ref={hero_desginRef}
              //style={{ backgroundColor: "red" }}
              className="hero-design"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="rect-anime"
                x={210.5}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#5B8A72"
                fillOpacity={0.9}
              />
              <rect
                className="rect-anime"
                y={209.689}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#BFCBA8"
                fillOpacity={0.6}
              />
              <rect
                className="rect-anime"
                x={105.25}
                y={104.845}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#fff"
              />
              <rect
                className="rect-anime"
                x={105.25}
                y={317.155}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#fff"
              />
              <rect
                className="rect-anime"
                x={315.75}
                y={104.845}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#56776C"
                fillOpacity={0.65}
              />
              <ellipse
                className="rect-anime"
                cx={263.125}
                cy={157.267}
                rx={52.625}
                ry={52.422}
                fill="#49E7E7"
                fillOpacity={0.62}
              />
              <ellipse
                className="rect-anime"
                cx={157.875}
                cy={262.112}
                rx={52.625}
                ry={52.422}
                fill="#FAFF00"
              />
              <rect
                className="rect-anime"
                x={210.5}
                y={209.689}
                width={105.25}
                height={104.845}
                rx={20}
                fill="#5B8A72"
                fillOpacity={0.9}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
