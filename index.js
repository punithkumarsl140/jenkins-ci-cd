
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins CI/CD Pipeline!\n");
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
