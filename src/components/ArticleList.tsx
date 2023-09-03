import React from "react";
// import { IArticle } from '../types';
import Blogcard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImg";
import { data } from "@/utils/data/data";
import { BaseURl } from "@/utils/config";

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

const ArticleList = async ({articles}:any) => {

  return (
    <div className="flex  justify-between lg:flex-row 	md:flex-col sm:flex-col xs:flex-col  ">
      <div className="  lg:w-[75%] md:w-[100%]  ">
        {articles?.map((article: any) => {
      
          return (
            <div key={article.id}>
              <Blogcard article={article} />
            </div>
          );
        })}
      </div>

      
      <div className="gap-10 flex flex-col ">
        <BlogCardWithImage  text="  Get unlimited access"  btn={true}/>
        <BlogCardWithImage  text="  We are here for you "  btn={false}/>
        <BlogCardWithImage  text="  Get unlimited access"  btn={true}/>
      </div>
      
    </div>
  );
};

export default ArticleList;
