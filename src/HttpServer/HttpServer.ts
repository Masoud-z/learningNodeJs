import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from node!");
    res.end();
  }

  if (req.url === "/api/ids") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("new connection");
});

server.listen("3000");

console.log("listening to port 3000");
