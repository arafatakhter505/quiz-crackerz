import React, { useEffect, useState } from "react";
import Topic from "../Topic/Topic";

const QuizTopics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz").then((res) =>
      res.json().then((data) => setTopics(data.data))
    );
  }, []);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7 my-28 md:mx-20 mx-7">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default QuizTopics;
