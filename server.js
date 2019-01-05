const next = require("next");
const routes = require("./routes");
const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const express = require("express");

function redirect(req, res, next) {
  console.log(">>>>>>>>>>> HOST", req.hostname);
  console.log(">>>>>>>>>>> NOW", process.env.NOW_URL);
  if (
    req.hostname === "rationalworks.org" ||
    req.hostname === process.env.NOW_URL
  ) {
    return res.redirect(301, `https://www.rationalworks.org${req.originalUrl}`);
  }
  return next();
}

app.prepare().then(() => {
  express()
    .use(redirect)
    .use(handler)
    .listen(PORT, () =>
      process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
    );
});
