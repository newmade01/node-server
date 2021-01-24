const http = require("http");

//들어옴, 응답
const server = http.createServer((req, res) => {
    console.log(req);
})

//localhost port로 연결