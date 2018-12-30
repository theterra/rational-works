import { getFeaturedBlogPostAPI } from "../api";

import BlogPostCard from "../components/BlogPostCard";
import FeaturePost from "../components/FeaturedPost";
import BlogPosts from "../components/BlogPosts";
import Layout from "../components/Layout";
import MetaContent from "../components/MetaContent";
import { getContentUrl } from "../components/common/getContentUrl";

import "./blog.scss";

const Index = ({ featuredPost = {} }) => {
  const [contentUrl] = getContentUrl();
  return (
    <Layout paddingTop={"4rem"}>
      <MetaContent
        contentType={"article"}
        contentTitle={"Blog"}
        contentDescription={"Awesome Articles"}
        contentImage={"static/assets/images/logo.png"}
        contentUrl={contentUrl}
      />
      <section className="blog">
        <FeaturePost featuredPost={featuredPost} />
        <BlogPosts />
      </section>
    </Layout>
  );
};

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
