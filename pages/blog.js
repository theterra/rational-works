import { getFeaturedBlogPostAPI } from "../api";

import FeaturePost from "../components/FeaturedPost";
import BlogPosts from "../components/BlogPosts";
import Layout from "../components/Layout";
import MetaContent from "../components/MetaContent";
import { getContentUrl } from "../components/common/getContentUrl";

import "./blog.scss";

const Blog = ({ featuredPost = {} }) => {
  const [contentUrl] = getContentUrl();
  return (
    <Layout paddingTop={"4rem"} shadowLine>
      <MetaContent
        contentType={"article"}
        contentTitle={"Blog"}
        contentDescription={"Awesome Articles"}
        contentImage={"/static/assets/images/logo.png"}
        contentUrl={contentUrl}
      />
      <section className="blog">
        <FeaturePost featuredPost={featuredPost} />
        <BlogPosts />
      </section>
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const response = await getFeaturedBlogPostAPI({ pageSize: 1 });
  console.log(response);
  return {
    featuredPost: response.results[0]
  };
};

export default Blog;
