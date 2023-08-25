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

const ArticleList = ({ articles }: any) => {
  // grid border-4  grid-gap gap-16 mt-16
  return (
    <div className="  flex  justify-between flex-nowrap  lg:flex-row	 md:flex-col min-[320px]:flex-col">
      <div className="  lg:w-[70%] md:w-[100%]  min-[320px]:w-[100%]">
        {articles.map((article: any) => {
          return (
            <div key={article.id}>
              <Blogcard article={article} />
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-l-2  px-4 lg:w-[30%] py-2 ">
        <BlogCardWithImage />
      </div>
    </div>
  );
};

export default ArticleList;
