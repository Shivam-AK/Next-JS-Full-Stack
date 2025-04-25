import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Next.js New Server Started on PORT : 2999");
});

server.listen(2999, () => {
  console.log("Server Running on PORT : 2999");
});
