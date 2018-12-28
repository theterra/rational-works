import Prismic from "prismic-javascript";
import { PRISMIC_API_URL } from "../config";

const getBlogPostsAPI = async params => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at("document.type", "scopeblog"),
      {
        orderings: "[my.scopeblog.date desc]",
        ...params
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getFeaturedBlogPostAPI = async params => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at("document.tags", ['featured']),
      {
        orderings: "[my.scopeblog.date desc]",
        ...params
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getBlogPostAPI = async slug => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);
    // we pass up the slug to request the correct post
    const response = await API.query(
      Prismic.Predicates.at("my.scopeblog.uid", slug)
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { getBlogPostsAPI, getBlogPostAPI, getFeaturedBlogPostAPI };
