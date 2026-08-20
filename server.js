const http = require('http');

const port = 3000;

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start server
server.listen(port, () => {
  console.log(`Server running`);
});
