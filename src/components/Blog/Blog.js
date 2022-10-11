import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const Blog = () => {
  return (
    <div className="mt-28">
      <BlogItem
        title={`What is the purpose of react-router?`}
        body={`React Router is a standard library for routing in React. It enables
        the navigation among views of various components in a React
        Application, allows changing the browser URL, and keeps the UI in sync
        with the URL.`}
      ></BlogItem>
      <BlogItem
        title={`How does context API work?`}
        body={`The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.`}
      ></BlogItem>
      <BlogItem
        title={`React useRef Hook`}
        body={`useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property. However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.`}
      ></BlogItem>
    </div>
  );
};

export default Blog;
