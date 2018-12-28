import React, { Component } from "react";
import PrismicDOM from "prismic-dom";

import { getBlogPostAPI, getBlogPostsAPI } from "../api";
import linkResolver from "../helpers";
import htmlSerializer from "../helpers/htmlSerializer";

import "./post.scss";
import BlogPostCard from "../components/BlogPostCard";

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    // we get the slug of the post so that we can
    // query the API with it
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    const suggestedPosts = await getBlogPostsAPI({ pageSize: 3 });
    return {
      postData: response[0],
      suggestedPosts: suggestedPosts.results
    };
  }

  shareHandler = () => {
    if (FB) {
      FB.ui(
        {
          method: "share",
          display: "popup",
          href: "https://sour-zebra-65.localtunnel.me/blog/hello-test"
        },
        function(response) {}
      );
    }
  };

  render() {
    const { suggestedPosts, postData } = this.props;
    const post = postData.data;
    return (
      //   <article>
      //     <h1>{post.title.length ? post.title[0].text : ""}</h1>
      //     {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
      //     {RichText.render(post.body, linkResolver)}
      //   </article>
      <React.Fragment>
        <section className="article">
          <div className="article--container">
            <h1 className="article__title">
              {post.title.length ? post.title[0].text : ""}
            </h1>
            <p className="article__summary">
              {post.summary.length ? post.summary[0].text : ""}
            </p>
            <div className="article__content">
              <div
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(
                    post.body,
                    linkResolver,
                    htmlSerializer
                  )
                }}
              />
            </div>
          </div>
        </section>

        <section className="article__related__posts">
          <section className="blog__posts">
            {/* <p>More articles</p> */}
            <div className="blog__posts--container">
              {Array.isArray(suggestedPosts) &&
                suggestedPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
            </div>
          </section>
        </section>
        <button className="share_button" onClick={this.shareHandler}>
          Share
        </button>
        <a
          className=""
          href="https://twitter.com/intent/tweet"
          data-size="large"
        >
          Tweet
        </a>
      </React.Fragment>
    );
  }
}
