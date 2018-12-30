import Head from "next/head";
import "./blog.scss";
import Link from "next/link";
import { getFeaturedBlogPostAPI } from "../api";

import { linkResolver } from "../helpers";
import BlogPostCard from "../components/BlogPostCard";
import FeaturePost from "../components/FeaturedPost";
import BlogPosts from "../components/BlogPosts";
import Layout from '../components/Layout'

const Index = ({ featuredPost = {} }) => (
  <Layout paddingTop={'4rem'}>
    <section className="blog">
      <FeaturePost featuredPost={featuredPost}/>
      <BlogPosts/>
    </section>
  </Layout>
);

Index.getInitialProps = async () => {
  // Here we call the API and request 5 documents
  // const response = await getBlogPostsAPI({ pageSize: 5 });
  // console.log(response.results[0].data.author);
  // return {
  //   posts: response.results
  // };

  const response = await getFeaturedBlogPostAPI({ pageSize: 1 });
  console.log(response);
  return {
    featuredPost: response.results[0]
  };
};

export default Index;
