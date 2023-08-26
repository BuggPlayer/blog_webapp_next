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
    <div className="border-t-2 p-3 flex justify-between md:flex-row lg:flex-row  sm:flex-col-reverse   ">
      <div className=" ">
        <Link href="#">
          <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
            {article.title}
          </h1>
        </Link>
        <div className="flex items-center my-4">
          <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
            <Image src={`/img2.jpg`} height={40} width={40} alt="image" />
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
        <div className="text-gray-500">
          {article?.content?.slice(0, 250)}{" "}
          {article?.content?.length > 250 ? "..." : ""}
        </div>

        <div className=" flex gap-3 mt-4">
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
        width={200}
        height={200}
        className="sm:w-54 lg:w-44 md:w-44"
      />
    </div>

    // <div className="border-t-2   md:py-4 md:mx-4 sm:mx-2  min-[320px]:p-1  min-[320px]:mx-1 ">
    //   <div className="flex mt-3 lg:flex-row md:flex-row     min-[320px]:flex-col">
    //     <div>
    //       <Link href="https://blog-webapp-next-yfsx.vercel.app/blogs/1">
    //         <h1 className=" text-2xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
    //           {/* {article.attributes.Title} */}
    //           {article.title}
    //         </h1>
    //       </Link>
    //       <div className=" flex items-center my-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           className="w-6 h-6 "
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    //           />
    //         </svg>

    //         <span className=" ml-1 text-sm font-bold flex text-gray-600">
    //           BuggPlayer on
    //           <span className="text-gray-400 ml-2">
    //             {formatDate("2023-03-30T10:59:41.871Z")}
    //           </span>
    //         </span>
    //       </div>

    //       <div className="text-gray-500  flex  break-all">
    //         <p className="my-2 md:mr-10 min-[320px]:mr-1">
    //           {article?.description?.slice(0, 250)}
    //           {article.description?.length > 250 ? "..." : ""}
    //         </p>

    //         {/* {article.description.length > 250 ? "..." : ""} */}
    //       </div>
    //     </div>

    //     <Image
    //       src="/img1.jpg"
    //       alt=""
    //       width={150}
    //       height={150}
    //       className="min-[320px]:my-2 md:w-72"
    //     />
    //   </div>
    //   <div className=" flex gap-3">
    //     <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
    //       React
    //     </p>
    //     <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
    //       Node
    //     </p>{" "}
    //     <p className="border bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
    //       Javascript
    //     </p>{" "}
    //     <p className="border  bg-gray-200 inline-block text-sm px-2  text-gray-400 rounded-xl ">
    //       Express
    //     </p>
    //   </div>

    //   {/**/}
    // </div>
  );
};

export default BlogCard;
