//노드 디렉토리 생성
const fs = require('fs');

//Directory 존재 여부 체크
const directory = fs.existsSync("./sample")//디렉토리 경로 입력

//Directory가 존재 한다면 true 없다면 false
console.log("Boolan : ", directory);

//Directory 생성
fs.mkdirSync("생성 디렉토리 경로")
 
//보통 Directory가 없다면 새로 만들어야 한다면 아래와 같은 코드를 만들어 사용할 수 있다.
 
if(!directory) fs.mkdirSync("생성 디렉토리 경로");

// OR

// if(!fs.existsSync("./sample")) fs.mkdirSync("생성 디렉토리 경로");


//디렉토리 삭제
const fs = require('fs');

//비동기 방식으로 디렉토리 삭제
fs.rmdir("./sample",{ recursive: true }, err => {
    console.log("err : ", err);
})

//동기 방식으로 디렉토리 삭제
try {
    fs.rmdirSync("./sample", { recursive
        

//비동기 방식으로 파일 정보 읽기
fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // 파일 데이터 정보
});

//동기 방식으로 파일 정보 읽기
const file = fs.readFileSync('./sample.txt', 'utf8')

console.log("file : ", file);

//파일 생성
const fs = require('fs');

//비동기 방식으로 파일 정보 읽기
const file = fs.readFileSync('./sample.txt', 'utf8')

/**
 * 비동기 방식으로 새로운 파일 만들기
 * "./sample2.txt" : 파일 생성할 경로
 * file : 파일 데이터
 */
fs.writeFile("./sample2.txt", file, (err) =>{
    console.log(err);
})

/**
 * 동기 방식으로 새로운 파일 만들기
 * "./sample2.txt" : 파일 생성할 경로
 * file : 파일 데이터
 */
fs.writeFileSync("./sample2.txt", file)


//파일 삭제
const fs = require('fs');

//비동기 방식으로 파일 삭제
fs.unlink("./smple2.txt", err => {
    
    if(err.code == 'ENOENT'){
        console.log("파일 삭제 Error 발생");
    }
});


try {

	//동기 방식으로 파일 삭제
    fs.unlinkSync("./sample222.txt")

} catch (error) {

    if(err.code == 'ENOENT'){
        console.log("파일 삭제 Error 발생");
    }
}

//파일 체크
const fs = require('fs');

//비동기 방식으로 파일 체크
fs.stat("./sample.txt", (err, stats) =>{
    if (err.code === "ENOENT") {
        console.log("파일이 존재하지 않습니다.");
    }
})

// 동기 방식으로 파일 체크
try {

  fs.statSync("./sample.txt");

} catch (error) {

	//파일이 없다면 에러 발생
    if (error.code === "ENOENT") {
       console.log("파일이 존재하지 않습니다.");
    }
}