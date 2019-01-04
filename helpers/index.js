function linkResolver(doc) {
  if (doc.type === "blog_posts") {
    return `/blog/${doc.uid}`;
  }
  return "/";
}

module.exports = {
  linkResolver
};
