// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
// This code creates a simple HTTP server using Node.js. When a request is made to the server, it responds with an HTML message "Hello Node!!!!". The server listens on port 3000 and logs a message to the console when it starts running.