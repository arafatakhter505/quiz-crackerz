import React from "react";

const BlogItem = ({ title, body }) => {
  return (
    <div className="shadow-md border-2 md:p-8 p-5 md:w-3/5 w-4/5 my-12 mx-auto">
      <h3 className="text-2xl font-semibold mb-5">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default BlogItem;
