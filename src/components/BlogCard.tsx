import { formatDate } from "@/utils/utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IArticle } from "../types";
// import { formatDate } from "../utils";
// interface IPropType {
//   article: IArticle;
// }

const BlogCard = async ({ article }: any) => {
  return (
    <div
      className="flex  justify-between lg:flex-row md:flex-row sm:flex-row xs:flex-col-reverse    border-t-2
      overflow-hidden md:p-3
       sm:p-2 xs:p-2
     "
    >
      <div className=" lg:w-[80%] md:w-[80%] mr-5 ">
        <Link href="https://blog-webapp-next-wv8x.vercel.app/blogs/1">
          <h1 className="text-2xl md:w-[80%] sm:w-[80%] xs:w-[95%] text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
            {article.title}
          </h1>
        </Link>
        <div className="flex items-center md:my-4  sm:my-2 xs:my-2">
          <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
            <Image
              src={`/img2.jpg`}
              height={40}
              width={40}
              alt="image"
              className="rounded-lg overflow-hidden  "
            />
          </div>
          <span className="text-sm font-bold text-gray-600">
            {/* {article.attributes.author.data.attributes.firstname} */}{" "}
            {/* {article.attributes.author.data.attributes.lastname}  */}
            tech bloger on &nbsp;
            <span className="text-gray-400">
              {formatDate(article.createdAt)}
            </span>
          </span>
        </div>
        <div
          className="text-gray-500 w-[70%]   sm:w-[90%] xs:w-[95%] break-all"
          // dangerouslySetInnerHTML={{ __html: article?.content?.slice(0, 250) }}
        >
          {article?.content?.slice(0, 250)}{" "}
          {article?.content?.length > 250 ? "..." : ""}
        </div>

        <div className=" flex gap-3 my-4">
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
      </div>

      <Image
        src="/img1.jpg"
        alt=""
        width={150}
        height={150}
        className="
      lg:w-80 md:w-56 sm:w-full xs:w-full my-2 overflow-hidden
        "
      />
    </div>
  );
};

export default BlogCard;
