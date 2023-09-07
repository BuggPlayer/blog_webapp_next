import { formatDate } from "@/utils/utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = async ({ article }: any) => {
  // console.log("article", article);

  return (
    <div
      className="flex my-5 rounded-md font-displayHead bg-white  shadow-md justify-between lg:flex-row md:flex-row sm:flex-row xs:flex-col-reverse   
      overflow-hidden md:p-3
       sm:p-2 xs:mx-3
     "
    >
      <div className=" lg:w-[80%] md:w-[80%] sm:w-[100%] xs:w-[100%] mr-5 xs:ml-2 sm:ml-2    my-2 ">
        <Link
          href={{
            pathname: `/${article.slug}`,
          }}
        >
          <h1 className="text-2xl md:w-[80%] sm:w-[80%] xs:w-[95%] text-headingTextColor font-bold hover:text-gray-600 hover:underline hover:cursor-pointer">
            {article.title}
          </h1>
        </Link>
        <div className="flex items-center md:my-4  sm:my-2 xs:my-1">
          <div className="rounded-lg  overflow-hidden flex items-center justify-center mr-2">
            <Image
              src={`/user-profile.png`}
              height={30}
              width={30}
              alt="image"
              className="rounded-lg overflow-hidden  "
            />
          </div>
          <span className="text-sm font-bold font-displayHead  text-subHeadingTextColor">
            {/* {article.attributes.author.data.attributes.firstname} */}{" "}
            {/* {article.attributes.author.data.attributes.lastname}  */}
            Tech Blog&nbsp;
            <span className=" font-normal   text-subHeadingTextColor">
              {formatDate(article.createdAt)}
            </span>
          </span>
        </div>
        {/* <div
          className="text-gray-500 w-[70%]   sm:w-[90%] xs:w-[95%] break-all"
          // dangerouslySetInnerHTML={{ __html: article?.content?.slice(0, 250) }}
        >
          {article?.content?.slice(0, 250)}{" "}
          {article?.content?.length > 250 ? "..." : ""}
        </div> */}

        <div className=" flex justify-between text-gray-600 gap-3 mt-4">
          <p className="border  inline-block text-sm px-2 bg-backgroundColor text-subHeadingTextColor rounded-xl ">
            {article?.category?.name}
          </p>
          <div className=" flex gap-3 sm:mr-6 xs:mr-6">
            <a href="#" className="hover:text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Image
        src="/desk.jpg"
        alt=""
        width={300}
        height={300}
        priority
        className="
      lg:w-70 md:w-auto  h-auto sm:w-full xs:w-full  p-2 my-2 overflow-hidden
        "
      />
    </div>
  );
};

export default BlogCard;
