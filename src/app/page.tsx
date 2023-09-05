import Head from "next/head";
import ArticleList from "@/components/ArticleList";
import Tabs from "@/components/Tabs";
import Navbar from "@/components/Navbar";
import { BaseURl } from "@/utils/config";

// blogs api
const getBlogsData = async () => {
  const res = await fetch(`${BaseURl}api/blog/getBlogs`);
  return await res.json();
};

// cagtegory api
const getCategory = async () => {
  const res = await fetch(`${BaseURl}api/category/getcategories`);
  // console.log(res.json());

  return await res.json();
};

const Home = async () => {
  const { data: articleData } = await getBlogsData();
  const categoryData = await getCategory();
  // console.log("categoryData", categoryData);
  //
  return (
    <main className="  ">
      <div className=" lg:p-6 md:p-4 sm:p-2 xs:p-1  mx-auto font-sans ">
        <Head>
          <title> Tech blog | Tech Insights, Tutorials, and News </title>

          <meta
            name="description"
            content="Explore the latest tech insights, tutorials, and news on our tech blog. Learn about HTML, CSS, JavaScript, React.js, and more. Stay updated with the tech world."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Tabs categories={categoryData} />
        <h1 className="my-5 text-2xl  ">Recent Articles</h1>
        <ArticleList articles={articleData} />
      </div>
    </main>
  );
};

export default Home;
