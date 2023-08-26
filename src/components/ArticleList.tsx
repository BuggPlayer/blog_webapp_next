import React from "react";
// import { IArticle } from '../types';
import Blogcard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImg";
import { data } from "@/utils/data/data";

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
// const getBlogsData = async () => {
//   const res = await fetch("http://localhost:5000/api/blog/getBlogs");
//   return await res.json();
// };
const ArticleList = async () => {
  // const { data: articleData } = await getBlogsData();

  // console.log(articleData);
  // grid border-4  grid-gap gap-16 mt-16
  return (
    <div className="flex  justify-between lg:flex-row 	md:flex-col sm:flex-col xs:flex-col  ">
      <div className="  lg:w-[75%] md:w-[100%]  ">
        {data.map((article: any) => {
          return (
            <div key={article.id}>
              <Blogcard article={article} />
            </div>
          );
        })}
      </div>

      
      <div className="rounded-md flex justify-center   my-4  px-4 lg:w-[25%]   py-2 ">
        <BlogCardWithImage />
      </div>
    </div>
  );
};

export default ArticleList;
