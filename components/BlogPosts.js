import { useEffect, useState } from "react";

import BlogPostCard from "./BlogPostCard";
import { getBlogPostsAPI } from "../api/";

const BlogPosts = () => {
  const [posts, postsHandler] = useState([]);

  //   const getPosts = async () => {
  //     return await getBlogPostsAPI({ pageSize: 5 });
  //   };
  useEffect(() => {
    getBlogPostsAPI({ pageSize: 5 }).then(response => {
      postsHandler(response.results);
    });
  }, []);

  return (
    <section className="blog__posts">
      <div className="blog__posts--container">
        {Array.isArray(posts) &&
          posts.map((post, index) => <BlogPostCard key={index} post={post} />)}
      </div>
    </section>
  );
};

export default BlogPosts;
