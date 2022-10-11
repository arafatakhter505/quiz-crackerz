import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, handleClick }) => {
  const { question, options, correctAnswer } = quiz;

  return (
    <div className="shadow-md border-2 md:p-8 p-5 md:w-3/5 w-4/5 my-12 mx-auto">
      <div
        className="cursor-pointer text-right md:text-2xl"
        onClick={() => handleClick(correctAnswer)}
      >
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </div>
      <h3 className="md:text-2xl font-semibold">{question}</h3>
      <ul className="mt-8">
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() =>
              handleClick(
                option === correctAnswer
                  ? `"${option}" is the right answer`
                  : `"${option}" is the wrong answer`
              )
            }
            className="bg-sky-100 cursor-pointer p-3 my-3"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
