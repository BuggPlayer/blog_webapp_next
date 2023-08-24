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
    <div>
      <Link href="#">
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {/* {article.attributes.Title} */}
          {article.title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <Image
            // src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            src="/favicon.ico"
            height={40}
            width={40}
            alt="algo"
          />
        </div>

        <span className="text-sm font-bold text-gray-600">
          {article.firstname} {article.lastname} on &nbsp;
          <span className="text-gray-400">
            {formatDate("2022-05-05T02:57:31z")}
          </span>
        </span>
      </div>
      {/* <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}{" "}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div> */}
    </div>
  );
};

export default BlogCard;
