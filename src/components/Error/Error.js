import React from "react";
import { Link } from "react-router-dom";
import Quiz from "../../assets/quiz.png";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <img src={Quiz} alt="" />
        <h2 className="text-6xl font-bold text-sky-500 mt-8">404</h2>
        <p className="text-3xl mb-5">Nothing here to see</p>
        <Link to="/" className="bg-sky-500 text-white py-2 px-3 rounded-md">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
