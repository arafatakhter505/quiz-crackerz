import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quiz from "../Quiz/Quiz";

const TopicDetails = () => {
  const details = useLoaderData();
  const { name, questions } = details.data;
  const notify = (msg) => toast(msg);

  return (
    <div className="mt-28">
      <h2 className="text-center text-3xl font-semibold text-sky-500">
        Quiz of {name}
      </h2>
      <div>
        {questions.map((question) => (
          <Quiz key={question.id} quiz={question} handleEye={notify}></Quiz>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default TopicDetails;
