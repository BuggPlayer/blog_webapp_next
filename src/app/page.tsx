import Head from "next/head";
import ArticleList from "@/components/ArticleList";
import Tabs from "@/components/Tabs";
import Navbar from "@/components/Navbar";

export default function Home() {
  const staticArticle = [
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      title: "What's a Blog & Why You Need One",
      description:
        "urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      email: "jpenddreth0@census.gov",
      gender: "Female",
      ip_address: "26.58.193.2",
    },
    {
      id: 2,
      first_name: "Giavani",
      last_name: "Frediani",
      email: "gfrediani1@senate.gov",
      title: "What's a Blog & Why You Need One",
      gender: "Male",
      ip_address: "229.179.4.212",
      description:
        "urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      title: "What's a Blog & Why You Need One",
      description:
        "urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      email: "jpenddreth0@census.gov",
      gender: "Female",
      ip_address: "26.58.193.2",
    },
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      title: "What's a Blog & Why You Need One",
      description:
        "urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      email: "jpenddreth0@census.gov",
      gender: "Female",
      ip_address: "26.58.193.2",
    },
  ];
  return (
    <main className="  dark:text-black     ">
      <Navbar />
      <div className=" p-6 pb-32  mx-auto font-sans ">
        <Head>
          <title> Blog Homepage</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Tabs /> */}
        <h1 className="  my-5 text-2xl ">Recent Articles</h1>
        <ArticleList articles={staticArticle} />
      </div>
    </main>
  );
}
