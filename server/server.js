import http from 'http'

const PORT = 3000;
const localhost = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>hello world</h1>");
});

server.listen(PORT, localhost, () => {
    console.log(`server running at http://${localhost}:${PORT}`);
})