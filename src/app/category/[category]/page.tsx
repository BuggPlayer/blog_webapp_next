import React from "react";

import Head from "next/head";

import { capitalizeFirstLetter, debounce, makeCategory } from "@/utils/utils";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";
import { BaseURl } from "@/utils/config";

// cagtegory api
const getCategory = async () => {
  const res = await fetch(`${BaseURl}api/category/getcategories`, {
    cache: "no-store",
  });
  return await res.json();
};

const Category = async ({ params }: any) => {
  // blogs api
  const getBlogsData = async () => {
    const res = await fetch(
      `${BaseURl}api/blog/postByCategory?categoryId=${params.category}`
    );
    return await res.json();
  };

  const { data: articleData } = await getBlogsData();
  // console.log(articleData);

  const data = await getCategory();

  // const getSingleCategory = async () => {
  //   const res = await fetch(
  //     `${BaseURl}api/category/singlecategory/?id=${params.category}`
  //   );
  //   // console.log(res.json());

  //   return await res.json();
  // };
  // const singalCategory = await getSingleCategory();
  // console.log("singalCategory", singalCategory);

  const formattedCategory = () => {
    return capitalizeFirstLetter(makeCategory(params.category));
  };

  // const handleSearch = (query: string) => {
  //   router.push(`/category/${ params.category}/?search=${query}`);
  // };

  return (
    <div className=" lg:p-6 md:p-4 sm:p-2 xs:p-1  mx-auto font-sans">
      <Head>
        <title>{data?.title}</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta
          name="description"
          content="Tech blog, HTML, CSS, JavaScript, React.js, technology tutorials, web development, coding, programming, software development"
        ></meta>
        <link rel="canonical" href="https://www.yourblog.com/"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={data} paramsId={params.category} />
      <ArticleList articles={articleData} />
      {/* <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <ArticleList articles={articles.items} /> */}
    </div>
  );
};

export default Category;
