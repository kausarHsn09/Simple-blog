import React from "react";

import BlogCard from "./BlogCard";

const Blog = ({ bloglist }) => {
  return (
    <div className="flex mt-10 flex-wrap justify-between w-[1500px] mx-auto">
      {bloglist.map((data, index) => (
        <BlogCard data={data} key={index} />
      ))}
    </div>
  );
};

export default Blog;
