import { useEffect, useState } from "react";

import BlogPostCard from "./BlogPostCard";
import { getBlogPostsAPI } from "../api/";

const BlogPosts = () => {
  const [posts, postsHandler] = useState([]);

  //   const getPosts = async () => {
  //     return await getBlogPostsAPI({ pageSize: 5 });
  //   };
  useEffect(() => {
    getBlogPostsAPI({ pageSize: 100 }).then(response => {
      postsHandler(response.results);
    });
  }, []);

  const extraCards = Math.ceil(3 - posts.length % 3);
  return (
    <section className="blog__posts">
      <div className="blog__posts--container">
        {Array.isArray(posts) &&
          posts.map((post, index) => <BlogPostCard key={index} post={post} />)}
        {extraCards > 0 &&
          Array.from(Array(extraCards).fill("extraCards")).map((item, index) => (
            <div className="blog__posts__item" key={`${item}${index}`} style={{opacity: 0, minHeight: 0}}/>
          ))}
      </div>
    </section>
  );
};

export default BlogPosts;
