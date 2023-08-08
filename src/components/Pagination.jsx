import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="mx-auto text-center mt-10 ">
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            onClick={() => setCurrentPage(page)}
            className=" font-josefin font-medium text-lg bg-primary rounded-full ml-5 w-5 h-5 p-5 cursor-pointer mx-auto"
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
