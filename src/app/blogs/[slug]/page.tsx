// import { AxiosResponse } from "axios";
import React from "react";
// import qs from "qs";
import Image from "next/image";
// import { formatDate, serializeMarkdown } from '../../utils';
// import { fetchArticleBySlug } from '../../http';
// import { IArticle, ICollectionResponse } from '../../types';
import { GetServerSideProps } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// interface IPropType {
//   article: IArticle;
//   notFound?: boolean;
// }

const page = () => {
  return (
    <>
      <Head>
        <title>
          hello word this is new world
          {/* {article.attributes.Title} */}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-12 mx-10 grid lg:grid-cols-3 gap-12 single-article">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold py-2">
            {/* {article.attributes.Title} */}
            hello word this is new world
          </h1>
          <div className="flex items-center my-4">
            <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
              <Image
                src="/img1.jpg"
                alt="no"
                // src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                height={40}
                width={40}
              />
            </div>
            <span className="text-sm font-bold text-gray-600">
              {/* {article.attributes.author.data.attributes.firstname}{" "} */}
              buggplayer
              {/* {article.attributes.author.data.attributes.lastname} on &nbsp; */}
              <span className="text-gray-400">
                {/* {formatDate(article.attributes.createdAt)} */}
                23 aug 23
              </span>
            </span>
          </div>
          <div className="text-lg text-gray-600 leading-8">
            <img
              className="w-full my-12 mb-6"
              src="/img2.jpg"
              alt="no"

              // src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}
              // alt={article.attributes.Title}
            />
            {/* <MDXRemote
              // {...(article.attributes.body as MDXRemoteSerializeResult)}
            {
            
            }
            /> */}
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
        </div>
        <div className="sticky top-0">
          <h2 className="font-bold text-gray-600 text-lg">
            Signup to our newsletter
          </h2>
          <p className="mt-4 text-gray-500">
            Get the latest article on all things data delivered straight to your
            inbox
          </p>
          <input
            className="border w-full p-2 pl-3 my-6 outline-primary"
            type="email"
            placeholder="Your work email"
          />
          <button className="border-2 border-primary rounded py-1 px-6 text-primary font-bold">
            Subscribe
          </button>
          <hr className="my-6 border-gray-100" />
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <span className="text-gray-500 mr-2">Share</span>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
          <hr className="my-6 border-gray-100" />
        </div>
      </div>
    </>
  );
};

export default page;