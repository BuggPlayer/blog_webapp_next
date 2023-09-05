import { BaseURl } from "@/utils/config";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export async function GET(request) {
  const res = await fetch(`${BaseURl}api/category/getcategories`, {
    cache: "no-store",
  });
  const data = await res.json();
  // c/onst data = json
  // console.log("data" , data);

  const fields = data.map((e) => ({
    loc: `https://localhost:3000/blog/${e["slug"]}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
}
