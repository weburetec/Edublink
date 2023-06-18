// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// import { createProxyMiddleware } from "http-proxy-middleware";
// const proxy = createProxyMiddleware("/api", {
//   target: "https://api.geniebiz.lk",
//   changeOrigin: true,
//   pathRewrite: {
//     "^/api": "/public/v2", // Adjust the path rewrite according to your API structure
//   },
// });

// export default proxy;
