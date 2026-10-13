const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        app: "Super App Backend",
        status: "ok",
        version: "1.0.0"
      })
    );
    return;
  }

  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        status: "healthy"
      })
    );
    return;
  }

  if (req.url === "/api/v1/health" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        api: "v1",
        status: "healthy"
      })
    );
    return;
  }

  res.writeHead(404);
  res.end(
    JSON.stringify({
      error: "Not Found"
    })
  );
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Super App Backend running on port ${PORT}`);
});
