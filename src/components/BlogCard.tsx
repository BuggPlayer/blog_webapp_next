import { formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IArticle } from "../types";
// import { formatDate } from "../utils";
// interface IPropType {
//   article: IArticle;
// }

const BlogCard = ({ article }: any) => {
  return (
    <div className="border-t-2   md:py-4 md:mx-4 sm:mx-2  min-[320px]:p-1  min-[320px]:mx-1 ">
      <span className="  text-sm font-bold flex text-gray-600">
        BuggPlayer on
        <span className="text-gray-400 ml-2">
          {formatDate("2023-03-30T10:59:41.871Z")}
        </span>
      </span>
      <div className="flex mt-3 lg:flex-row md:flex-row     min-[320px]:flex-col">
        <div>
          <Link href="https://blog-webapp-next-yfsx.vercel.app/blogs/1">
            <h1 className=" text-2xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
              {/* {article.attributes.Title} */}
              {article.title}
            </h1>
          </Link>

          <div className="text-gray-500  flex  break-all">
            <p className="my-2 md:mr-10 min-[320px]:mr-1">
              {article?.description?.slice(0, 250)}
              {article.description?.length > 250 ? "..." : ""}
            </p>

            {/* {article.description.length > 250 ? "..." : ""} */}
          </div>
        </div>

        <Image
          src="/img1.jpg"
          alt=""
          width={150}
          height={150}
          className="min-[320px]:my-2 md:w-72"
        />
      </div>
      <div className=" flex gap-3">
        <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
          React
        </p>
        <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
          Node
        </p>{" "}
        <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
          Javascript
        </p>{" "}
        <p className="border  bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
          Express
        </p>
      </div>
     
      {/**/}
    </div>
  );
};

export default BlogCard;
