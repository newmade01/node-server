const express = require("express");
const server = express();
//express 초기 선언


server.get("/", (req, res) => {
    //res는 응답
    res.send("<h1>hello from nodejs</h1>")

})


//GET 경로에 서버의 데이터를 요청한다
//POST 아이디, PW값을 넣을때 서버에 보내준다 값이 존재하는 USER인지 보내줌
//DELET 존재하는 USER 탈퇴시 지울때
//PUT 업데이트 DATA

server.listen(3000, (err) => {
    if (err) return console.log(err);

    console.log("the server is listening 3000")
});




// const http = require("http");

// //들어옴, 응답
// //server->clinet로 text값 보냄
// const server = http.createServer((req, res) => {
//     // console.log(req.url); //url 설정
//     if (req.url === "/") {
//         res.write("<h1>hello from nodejs</h1>");
//     } else {
//         res.write('<h1> you have enter url ${req.url} </h1>');
//     }
//     res.end();
// });

// //localhost port로 연결
// server.listen(3000, () => {
//     console.log("3000 listening ")
// });