import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const Blog = () => {
  return (
    <div className="mt-28">
      <BlogItem
        title="What is the purpose of react-router?"
        body="React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL."
      ></BlogItem>
    </div>
  );
};

export default Blog;
