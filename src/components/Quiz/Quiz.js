import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz }) => {
  const { question, correctAnswer, options } = quiz;
  console.log(options);

  return (
    <div className="shadow-md border-2 md:p-8 p-5 md:w-3/5 w-4/5 my-12 mx-auto">
      <div className="cursor-pointer text-right md:text-2xl">
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </div>
      <h3 className="md:text-2xl font-semibold">{question}</h3>
      <ul className="mt-8">
        {options.map((option, i) => (
          <li key={i} className="bg-sky-100 cursor-pointer p-3 my-3">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
