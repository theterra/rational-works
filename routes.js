const routes = require("next-routes");

module.exports = routes()
  .add("index", "/")
  .add("blog", "/blog")
  .add("post", "/blog/:slug")
  .add("constitution", "/constitution")
  .add("faqs", "/faqs");
