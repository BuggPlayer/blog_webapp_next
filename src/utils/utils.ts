// import { serialize } from "next-mdx-remote/serialize";
// import { IArticle } from "../types";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
  return debounced;
};



// export const GA_TRACKING_ID = "G-226MBLFR8V" //replace it with your measurement id

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = url => {
//   window.gtag("config", GA_TRACKING_ID, {
//     page_path: url,
//   })
// }

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }






// export const serializeMarkdown = async (item: any) => {
//   const body = await serialize(item.attributes.body as string);
//   return {
//     ...item,
//     attributes: {
//       ...item.attributes,
//       body,
//     },
//   };
// };




// const res = await fetch('http://localhost:5000/api/blog/getBlogs')
// const data = await res.json()
// console.log(data);