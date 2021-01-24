const express = require("express");
const server = express();
//express 초기 선언



//static은 text파일을 읽을때 원하는 값을 가져옴, css값을 읽기위해 꼭 써줘야함
server.use(express.static(__dirname + "/public"));


// //MiddleWare를 만듬, 모두 요청을 여기를 지나가야한다.
// server.use((req, res, next) => {
//     req.user = {
//         id: "1234",
//     };
//     //next(); 는 use 부분을 모두 처리하고 그 다음으로 넘어갈 수 있도록 처리.
//     next();

//     // console.log("hi from client");
// });




server.get("/", (req, res) => {

    // console.log(req.user);
    //__dirname: 자신의 파일 경로를 얻음
    //__filename: 지금 파일의 이름

    res.sendFile(__dirname + "/index.html");


    // //res는 응답
    // res.send("<h1>hello from nodejs</h1>");

});





//about이라는 요청이 왔을경우
server.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
})


//모든 값을 지나왔지만 url을 찾을 수 없을경우 에러 페이지404를 띄운다.
server.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});



//GET 경로에 서버의 데이터를 요청한다, 기본
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