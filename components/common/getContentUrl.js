import { useEffect, useState } from "react";

const getContentUrl = () => {
  const [contentUrl, contentUrlHandler] = useState("");
  useEffect(() => {
    contentUrlHandler();
  }, []);
  return [contentUrl];
};

export {
    getContentUrl
}
