import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total, handleStart } = topic;
  return (
    <div className="shadow-lg p-5 border-2 rounded-lg">
      <div className="bg-sky-100">
        <img src={logo} alt="topic" />
      </div>
      <div className="flex justify-between items-center my-3">
        <h3 className="text-2xl">{name}</h3>
        <p>Quiz: {total}</p>
      </div>
      <div className="mt-8">
        <Link onClick={() => handleStart(id)}>
          <button className="bg-sky-500 rounded-lg text-white py-2 px-3 w-full">
            Start Practice <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
