const http = require('http');
const app = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello world')
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});