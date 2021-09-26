import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      //console.log(clientX + " " + clientY);
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      console.log(mouseX + " " + mouseY);
      cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
  }, []);
  return <div className="app-cursor" ref={cursorRef} />;
};

export default Cursor;
