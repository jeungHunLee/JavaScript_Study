//함수
function a() {
    console.log("Hello World!");
}

a();    //Hello World!
        //return 값이 없으므로 undefined 호출

function add() {
    return 1;
}

function add(a, b) {
    return a + b;
}

function add(a, b, c) {    //함수 이름이 같으면 마지막 함수만 인식
    return a + b + c;
}

console.log(add(1));    //NaN
console.log(add(1, 2));    //NaN
console.log(add(1, 2, 3));    //6
console.log(add(1, 2, 3, 4));    //6    마지막 인수는 무시

//callback 함수(매개변수로 전달되는 함수)
function callFiveTimes(callback) {    //매개변수로 전달되는 함수에는 소괄호 생략
    for (let i = 0; i < 5; i++) {
        callback();
    }
}

callFiveTimes(function() {
    console.log("Hello World!");
})
/*
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
*/