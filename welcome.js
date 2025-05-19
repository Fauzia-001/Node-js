//welcome.js
const fs = require('fs');

// Create a file with "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and log the content of the file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});