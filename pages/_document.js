import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
            defer
          />
          <link href="/static/css/nprogress.css" rel="stylesheet" />
          <meta
            property="og:url"
            content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
          />
          <meta property="og:type" content="article" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@nytimesbits" />
          <meta name="twitter:creator" content="@nickbilton" />
          <meta
            property="og:url"
            content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
          />
          <meta property="og:title" content="A Twitter for My Sister" />
          <meta
            property="og:description"
            content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
          />
          <meta
            property="og:image"
            content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
          />
          <style>{`
          :root {
            --color-primary: #4285f4;
            --color-primary-light: #4283ef;
            --color-primary-dark: #09203f;
          
            --color-grey-light-1: #faf9f9;
            --color-grey-light-2: #f4f2f2;
            --color-grey-light-3: #f0eeee;
            --color-grey-light-4: #ccc;
          
            --color-grey-dark-1: #333;
            --color-grey-dark-2: #777;
            --color-grey-dark-3: #999;
          
            --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
            --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);
          
            --shadow-elevate-2: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
            --shadow-elevate-8: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
            --shadow-elevate-12: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
            --shadow-elevate-16: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
            --shadow-elevate-24: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
          
            --line: 1px solid var(--color-grey-light-2);
          
            --large-font: 1.5rem;
          }
          
          * {
          margin: 0;
          padding: 0;
        }
        
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        
        html {
          box-sizing: border-box;
          font-size: 100%;
        }
        
        body {
          font-family:Roboto,sans-serif;
          font-weight: 400;
          line-height: 1.6;
          background-image: #fff;
          background-color: #fff;
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 100vh;
        }
          `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
