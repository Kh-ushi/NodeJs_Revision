const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}New Req Recieved\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("Khushi Gupta");
                break;

            default:
                res.end("Default")
        }
    })
});

myServer.listen(8000, () => console.log("Server started"));