import { useState } from "react";
import "./App.css";

import idleImage from "./images/idle.jpg";
import smileImage from "./images/smile.jpg";

const App = () => {
  const [bounce, setBounce] = useState(false);
  const [score, setScore] = useState(0);
  const [smile, setSmile] = useState(false);

  const handleIncreseScore = () => {
    setBounce(true);
    setScore((prev) => prev + 1);
    setSmile(true);
  };

  const numberWithComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div
      className="container"
      onMouseDown={handleIncreseScore}
      onMouseUp={() => setSmile(false)}
      onAnimationEnd={() => setBounce(false)}
      style={{
        backgroundImage: `url(${smile ? smileImage : idleImage})`,
      }}
    >
      <div className="headerContainer">
        <div className="header unselectable">POPNONT</div>
      </div>
      <div className={`score unselectable ${bounce ? "bounce" : ""}`}>
        {numberWithComma(score)}
      </div>
    </div>
  );
};

export default App;
