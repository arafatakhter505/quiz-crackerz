import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const quizTopics = useLoaderData();
  const data = quizTopics.data;

  return (
    <div className="flex justify-center mt-28">
      <div className="z-[-1]">
        <ResponsiveContainer>
          <LineChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
