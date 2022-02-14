const http = require('http'); //const 선언과 동시에 초기화 변경 x , require 선언과 같음
 
http.createServer((req, res) => {   //요청이 들어 올 시
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(7777);