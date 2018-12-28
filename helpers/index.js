function linkResolver(doc) {
  if (doc.type === "scopeblog") {
    return `/blog/${doc.uid}`;
  }
  return "/";
}

module.exports = {
  linkResolver
};
