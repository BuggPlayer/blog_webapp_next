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
    <div className="  border-t-2      md:p-5 md:mx-6       min-[320px]:p-1  min-[320px]:mx-1 ">
      <div className="flex items-center my-2    ">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span className=" text-sm font-bold 0 text-gray-600">
          {article.firstname} {article.lastname} on &nbsp;
          <span className="text-gray-400">
            {formatDate("2023-03-30T10:59:41.871Z")}
          </span>
        </span>
      </div>
      <div className="flex lg:flex-row md:flex-row   min-[320px]:flex-col">
        <div>
          <Link href="#">
            <h1 className=" my-2 text-2xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
              {/* {article.attributes.Title} */}
              {article.title}
            </h1>
          </Link>

          <div className="text-gray-500  flex ">
            <p className=" md:mr-10 min-[320px]:mr-1">
              {article?.description?.slice(0, 350)}{" "}
              {article.description?.length > 350 ? "..." : ""}
            </p>

            {/* {article.description.length > 250 ? "..." : ""} */}
          </div>
        </div>

        <Image src="/img1.jpg" alt="" width={250} height={200} className="min-[320px]:my-2" />
      </div>

      {/**/}
    </div>
  );
};

export default BlogCard;
