import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data: { title, id, description, image, Author } }) => {
  const descriptionCut = description
    .split(" ", 20)
    .toString()
    .replace(/\,/g, " ");
  const titleCut = title.split(" ", 5).toString().replace(/\,/g, " ");
  return (
    <div key={id}>
      <div className="rounded-[5px] card-container w-[460px] h-[630px] bg-primary p-5 mt-5">
        <span className="font-josefin py-1 px-7 mt-5 ml-5 rounded-full font-medium absolute bg-primary">
          {Author}
        </span>
        <img src={image} alt={title} />

        <h1 className="font-josefin font-bold  text-3xl text-center mt-5">
          {titleCut}
        </h1>
        <h3 className="mt-2 text-center font-josefin font-medium">
          {descriptionCut}
        </h3>
        <Link to={`/blog/${id}`}>
          <button className="mt-3 ml-[145px] font-josefin bg-btnColor text-primary rounded-full px-10 py-3 text-lg">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
