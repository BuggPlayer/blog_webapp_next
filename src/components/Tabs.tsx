"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// import { ICategory } from '../types';

// interface IPropType {
//     categories: ICategory[];
//     handleOnSearch: (query: string) => void;
// }

const Tabs = ({ categories, handleOnSearch }: any) => {
  const catego = [
    { name: "Nextjs " },
    { name: "Ractjs " },
    { name: "HTML " },
    // { name: "NODE " },
    // { name: "Express " },
    // { name: "CSS " },
  ];
  const router = useRouter();

  const isActiveLink = (category: any) => {
    return false;
    // return category.attributes.Slug === router.query.category;
  };

  return (
    <div className="my-6 flex items-center font-displayHead justify-between lg:flex-row md:flex-row  sm:flex-col xs:flex-col  border-b-2 border-gray-100">
      <ul className=" flex items-center"> 
        <li
          className={
            "mr-6 pb-3 border-b-4 rounded-sm border-accentColor text-black "
            // +
            // `${
            //   router.pathname === "/"
            //     ? "border-green-500 text-primary"
            //     : "border-red-400 text-gray-400"
            // }`
          }
        >
          <Link href="/">Recent</Link>
        </li>

        {catego.map((category: any, index: number) => {
          return (
            <li
              key={index}
              className={
                "mr-6 pb-3 border-b-4 rounded-sm " +
                `${
                  isActiveLink(category)
                    ? "border-primary text-primary"
                    : "border-gray-400 text-gray-400"
                }`
              }
            >
              <Link
                href={""}
                //  href={`/category/${category.attributes.Slug}`}
              >
                {/* {category.attributes.Title} */}
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex rounded-sm bg-white px-2 sm:my-5 xs:my-5 md:w-[40%] lg:w-[40%] sm:w-[80%] xs:w-[90%]  items-center">
        <svg
          className="h-4 fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <input
          // onChange={(e) => handleOnSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="outline-none sm:p-3 xs:p-3 bg-white px-2 py-1 ml-1 "
        />
      </div>
    </div>
  );
};

export default Tabs;
