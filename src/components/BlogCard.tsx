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
            pathname: `blogs/${article.slug}`,
          }}
        >
          <h1 className="text-2xl md:w-[80%] sm:w-[80%] xs:w-[95%] text-headingTextColor font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
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

        <div className=" flex gap-3 mt-4">
          <p className="border  inline-block text-sm px-2 bg-backgroundColor text-subHeadingTextColor rounded-xl ">
            {article.category}
          </p>
          {/* <p className="border bg-backgroundColor inline-block text-sm px-2 text-subHeadingTextColor  rounded-xl ">
            Node
          </p>{" "}
          <p className="border bg-backgroundColor inline-block text-sm px-2  text-subHeadingTextColor rounded-xl ">
            Javascript
          </p>{" "}
          <p className="border  bg-backgroundColor inline-block text-sm px-2  text-subHeadingTextColor rounded-xl ">
            Express
          </p> */}
        </div>
      </div>

      <Image
        src="/img1.jpg"
        alt=""
        width={150}
        height={150}
        className="
      lg:w-70 md:w-48 h-auto sm:w-full xs:w-full  p-2 my-2 overflow-hidden
        "
      />
    </div>
  );
};

export default BlogCard;
