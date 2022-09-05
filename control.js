//조건문
if (true) {
    console.log("hello world!");    //hello world!
}

//짝수와 홀수를 판별하는 조건문
let value = 5;

if (value % 2 == 0) {
    console.log("짝수 입니다.");
} else {
    console.log("홀수 입니다.");    //홀수 입니다.
}

//점수에따라 등급을 반환하는 조건문 (if문))
let score = 85;

if (score >= 90) {
    console.log("A등급 입니다.");
} else if (score >= 80) {
    console.log("B등급 입니다.");    //B등급 입니다.
} else if (score >= 70) {
    console.log("C등급 입니다.");
} else {
    console.log("D등급 입니다.");
}

//등급에 따라 해당 등급을 알려주는 조건문 (switch-case문)
let grade = 'C';

switch (grade) {
    case 'A':
        console.log("A등급 입니다.");
        break;
    case 'B':
        console.log("B등급 입니다.");
        break;
    case 'C':
        console.log("C등급 입니다.");    //C등급 입니다.
        break;
    default:
        console.log("D등급 입니다.");
}

//조건부 연산자
console.log(5 > 1 ? "true" : "false");    //true

