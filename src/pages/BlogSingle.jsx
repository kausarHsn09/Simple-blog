import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../utils/data";

import { BlogMeta, BlogContent } from "../components";

const BlogSingle = () => {
  const { id } = useParams();

  // const isBlog = (blogId) => {
  //   return blogId.id == id;
  // };
  // const sort = BlogData.filter(isBlog);

  // const {title,description,image,Author}=BlogData[id-1]

  return (
    <div>
      {
        BlogData[id - 1] ? (
          <div>
            <BlogMeta
              image={BlogData[id - 1].image}
              title={BlogData[id - 1].title}
              Author={BlogData[id - 1].Author}
              Publish={BlogData[id - 1].date}
            />
            <BlogContent content={BlogData[id - 1].description} id={id} />
          </div>
        ) : (
          "Nothing"
        )

        // sort.map(({ title, id, description, image }) => (
        //   <h1>{title}</h1>
        // ))
      }
    </div>
  );
};

export default BlogSingle;
