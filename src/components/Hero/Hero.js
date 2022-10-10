import React from "react";
import Quiz from "../../assets/quiz.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:px-20 px-7">
      <div>
        <h3 className="text-3xl text-sky-500">Analyzent___</h3>
        <h2 className="text-5xl font-semibold">
          Play Quiz Test Your
          <span className="text-sky-500 my-2 block">Coding Knowledge!!</span>
        </h2>
      </div>
      <div>
        <img src={Quiz} alt="quiz" />
      </div>
    </div>
  );
};

export default Hero;
