import React from "react";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Landingpage from "./components/landingpage/Landingpage";

const App = () => {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Landingpage />
    </div>
  );
};

export default App;
