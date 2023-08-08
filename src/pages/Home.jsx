import React, { useState } from "react";

import { BlogData } from "../utils/data";
import { FeturedBlog, Blog, Pagination } from "../components";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = BlogData.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <FeturedBlog bloglist={BlogData} />
      <Blog bloglist={currentPosts} />
      <Pagination
        totalPosts={BlogData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
