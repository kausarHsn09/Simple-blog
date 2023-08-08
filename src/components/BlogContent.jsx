import React, { useState } from "react";
const BlogContent = ({ content, id }) => {
  const convertToWord = content.split(" ");
  const halfWord = Math.ceil(convertToWord.length / 2);
  const firstLineContent = convertToWord.slice(0, halfWord);
  const secondlineContent = convertToWord.slice(halfWord);

  return (
    <div className="w-[1500px] mx-auto mt-20">
      <p className="font-medium text-center font-josefin text-[20px]">
        {content}
      </p>
    </div>
  );
};

export default BlogContent;
