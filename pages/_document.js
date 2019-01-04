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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#141414" />
          <meta name="theme-color" content="#141414" />
          <link rel="manifest" href="static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
            defer
          />
          <link href="/static/css/nprogress.css" rel="stylesheet" />
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
          // scroll-behavior: smooth;
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

        @media only screen and (max-width: 37.5em) {
          html {
            box-sizing: border-box;
            font-size: 80%;
          }
          
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
