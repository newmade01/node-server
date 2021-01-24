const http = require("http");

//들어옴, 응답
//server->clinet로 text값 보냄
const server = http.createServer((req, res) => {
    // console.log(req.url); //url 설정
    if (req.url === "/") {
        res.write("<h1>hello from nodejs</h1>");
    } else {
        res.write('<h1> you have enter url ${req.url} </h1>');
    }
    res.end();
});

//localhost port로 연결
server.listen(3000, () => {
    console.log("3000 listening ")
});