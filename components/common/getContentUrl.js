import { useEffect, useState } from "react";

const getContentUrl = () => {
  const [contentUrl, contentUrlHandler] = useState("");
  useEffect(() => {
    contentUrlHandler(document.URL);
  }, []);
  return [contentUrl];
};

export {
    getContentUrl
}
