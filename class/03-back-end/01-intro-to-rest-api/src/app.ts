import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    if (request.url === "/api" && request.method === "GET") {
      // Set response header
      response.writeHead(200, { "content-type": "application/json" });
      // Set response body
      response.write(JSON.stringify({ message: "Welcome to my first API!" }));
      // End response
      response.end();
    } else if (request.url === "/api" && request.method === "POST") {
    } else if (request.url === "/api" && request.method === "DELETE") {
    } else {
      response.write("Route not found");
      response.end();
    }
  }
);

server.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
