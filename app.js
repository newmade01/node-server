const http = require("http");

//들어옴, 응답
//server->clinet로 text값 보냄
const server = http.createServer((req, res) => {
    // console.log(req.url); //url 설정
    res.write("<h1>hello from nodejs")
    res.end()
});

//localhost port로 연결
server.listen(3000, () => {
    console.log("3000 listening ")
});