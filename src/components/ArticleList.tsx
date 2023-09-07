import React from "react";

import Blogcard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImg";

const ArticleList = async ({ articles }: any) => {
  return (
    <div className="flex  justify-between lg:flex-row 	md:flex-col sm:flex-col xs:flex-col  ">
      <div className="  lg:w-[75%] md:w-[100%]  ">
        {articles ? (
          articles.map((article: any) => {
            return (
              <div key={article.id}>
                <Blogcard article={article} />
              </div>
            );
          })
        ) : (
          <div className="">
            <h3>NO DATA HERE</h3>
          </div>
        )}
      </div>

      <div className="gap-10 flex flex-col ">
        <BlogCardWithImage text="  Get unlimited access" btn={true} />
        <BlogCardWithImage text="  We are here for you " btn={false} />
        <BlogCardWithImage text="  Get unlimited access" btn={true} />
      </div>
    </div>
  );
};

export default ArticleList;
