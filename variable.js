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