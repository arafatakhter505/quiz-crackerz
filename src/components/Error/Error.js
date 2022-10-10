import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-3xl font-semibold">
        <p>oops!!!</p>
        <p>
          404 <span className="text-sky-500">|</span> Nothing to see here
        </p>
        <br />
        <Link to="/" className="mt-12 text-sky-500">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
