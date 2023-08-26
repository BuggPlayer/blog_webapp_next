import React from "react";
// import { IArticle } from '../types';
import Blogcard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImg";

// interface IPropType {
//     articles: IArticle[];
// }

/* .grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
} */
const getBlogsData = async () => {
  const res = await fetch("http://localhost:5000/api/blog/getBlogs");
  return await res.json();
};
const ArticleList = async () => {
  const {data:articleData} = await getBlogsData();

  // console.log(articleData);
  // grid border-4  grid-gap gap-16 mt-16
  return (
    <div className="  flex  justify-between flex-nowrap  lg:flex-row	 md:flex-col min-[320px]:flex-col">
      <div className="  lg:w-[80%] md:w-[90%]  sm:w-[100%]">
        {articleData.map((article: any) => {
          return (
            <div key={article.id}>
              <Blogcard article={article} />
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-l-2  px-4 lg:w-[30%] md:w-36 sm:w-1/2 py-2 ">
        <BlogCardWithImage />
      </div>
    </div>
  );
};

export default ArticleList;
