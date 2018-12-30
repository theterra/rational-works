import { useEffect, useState } from "react";

import Head from "next/head";

const MetaContent = ({
  contentType,
  contentTitle,
  contentDescription,
  contentImage,
  contentUrl
}) => {
  const [siteUrl, siteUrlHandler] = useState("");
  useEffect(() => {
    siteUrlHandler(window.location.host);
  }, []);

  return (
    <Head>
      <title>Rational Works | {contentTitle}</title>
      <meta property="og:url" content={contentUrl} />
      <meta property="og:type" content={contentType} />

      <meta name="twitter:card" content={contentDescription} />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:creator" content={"sriram"} />
      <meta property="og:title" content={contentTitle} />
      <meta property="og:description" content={contentDescription} />
      <meta property="og:image" content={contentImage} />
    </Head>
  );
};

export default MetaContent;
