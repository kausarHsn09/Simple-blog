import React from "react";

const BlogMeta = ({ title, image, Publish, Author }) => {
  return (
    <div className="w-[1500px] mx-auto mt-20">
      <img src={image} alt={title} className="w-full h-[500px] object-cover " />
      <h1 className="mt-10 font-blod text-center text-[60px] font-josefin">
        {title}
      </h1>
      <div className="w-full  flex  justify-evenly">
        <p className="font-medium font-josefin text-lg">Author: {Author}</p>
        <p className="font-medium font-josefin text-lg">Publish: {Publish}</p>
      </div>
    </div>
  );
};

export default BlogMeta;
