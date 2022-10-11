import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const TopicDetails = () => {
  const details = useLoaderData();
  const { name, questions } = details.data;

  return (
    <div className="mt-28">
      <h2 className="text-center text-3xl font-semibold text-sky-500">
        Quiz of {name}
      </h2>
      <div>
        {questions.map((question) => (
          <Quiz key={question.id} quiz={question}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default TopicDetails;
