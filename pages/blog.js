import Head from "next/head";
import "./blog.scss";
import Link from "next/link";
import { getFeaturedBlogPostAPI } from "../api";

import { linkResolver } from "../helpers";
import BlogPostCard from "../components/BlogPostCard";
import FeaturePost from "../components/FeaturedPost";
import BlogPosts from "../components/BlogPosts";

const Index = ({ featuredPost = {} }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
        rel="stylesheet"
      />
    </Head>
    <section className="blog">
      <FeaturePost featuredPost={featuredPost}/>
      <BlogPosts/>
    </section>
    {/* <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Link
            as={linkResolver(post)}
            href={`/blogPost?slug=${post.uid}`}
            passHref
          >
            <a>{post.data.title[0].text}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </>
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
