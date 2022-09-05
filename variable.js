//변수 선언
var age = 99;
console.log(age);    //99

let name = "철수"
console.log(name);    //철수
name = "영희";    //let 키워드로 선언된 변수는 재정의 가능
console.log(name)    //영희

let empty    //선언 후 초기화 하지 않음
console.log(empty);    //undefined  (값이 비어있음을 나타냄(기본값))
name = undefined;    //변수 비우기
console.log(name);    //undefined

//변수 재선언
var myAge = 20;
console.log(myAge);    //20
var myAge = 30;    //var 키워드로 선언된 변수는 재선언 가능
console.log(myAge);    //30

//변수 사용
let hello = "Hello! ";
let friend = "영희";
console.log(hello + friend);    //Hello! 영희

let number = 5;
number += 5;
console.log(number);    //10

//const
const pi = 3.14;    //다른 언어의 let을 javascript에서 const로 표현
//pi = 3.141592;    재정의하면 오류 발생
//const pi = 3.141592;    재선언하면 오류 발생
//const myName;    선언과 동시에 초기화하지 않으면 오류 발생

//var hoisting
console.log(a);    //undefined

var a = 2;
console.log(a);    //2

test();    //var 타입 hoisting

function test() {
    console.log("var 타입 hoisting");
}

//let, const hoisting
//console.log(b);    선언 후 초기화는 안하기 때문에 에러

let b = 5;
console.log(b);    //5

//test();

var test = function() {
    console.log("let, const 타입 hoisting");
}

test();