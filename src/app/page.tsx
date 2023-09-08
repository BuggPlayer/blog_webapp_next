import Head from "next/head";
import Script from "next/script";
import ArticleList from "@/components/ArticleList";
import Tabs from "@/components/Tabs";
import Navbar from "@/components/Navbar";
import { BaseURl } from "@/utils/config";
import Footer from "@/components/Footer";

// blogs api
const getBlogsData = async () => {
  const res = await fetch(`${BaseURl}api/blog/getBlogs`, {
    cache: "no-store",
  });
  return await res.json();
};

// cagtegory api
const getCategory = async () => {
  const res = await fetch(`${BaseURl}api/category/getcategories`, {
    cache: "no-store",
  });
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-98BF202168"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-98BF202168');
        `}
        </Script>
        <Tabs categories={categoryData} />
        <h1 className="my-5 mx-1 text-2xl  ">Recent Articles</h1>
        <ArticleList articles={articleData} />
      </div>
      <div className="bg-red-300 lg:flex md:flex sm:hidden  xs:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
