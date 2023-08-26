import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IArticle } from "../types";

// interface IPropType {
//   article: IArticle;
// }

const BlogCardWithImg = ({ article }: any) => {
  return (
    <div
      className=" bg-gray-100   rounded-md flex h-60
     items-center md:justify-center px-4 "
    >
      <div className="p-3">
        <p className="text-xl  text-black font-bold cursor-pointer">
          Get unlimeted access to tech blog everthing here!
        </p>
        <p className="my-2 mb-5 text-gray-400">
          plan start as free for students
        </p>
        <Link href="#" className="">
          <span className="bg-gray-400 rounded-md p-3 mt-10  ">
            Get unlimited access
          </span>
        </Link>
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-20 h-20 "
        >
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      </div>
    </div>
  );
};

export default BlogCardWithImg;
