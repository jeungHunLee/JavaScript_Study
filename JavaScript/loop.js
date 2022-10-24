//반복문
//1부터 10까지 더하기(while문)
let a = 1;
let result = 0;

while (a < 11) {
    result += a;
    a += 1;
}

console.log(result);    //55

//1부터 10까지 더하기(for문)
result = 0;

for(let i = 1; i <= 10; i++) {
    result += i;
}

console.log(result);    //55

//for in 구조
let numbers = [];
numbers[0] = "zero";
numbers[1] = "one";
numbers[2] = "two";

for (let i in numbers) {    //객체의 key 값에 접근 가능(배열의 경우 index)
    console.log(i, numbers[i]);
    /*
    0 zero
    1 one
    2 two
    */
}

//for of문
for (let num of numbers) {    //iterable한 객체 value 순회
    console.log(num);
    /*
    zero
    one
    two
    */
}

//forEach문(Array 객체에서만 사용가능)
numbers.forEach(function(value, index) {
    console.log(value, index);
});
/*
    zero 0
    one 1
    two 2
*/

numbers.forEach((value, index) => {
    console.log(`value: ${value} index: ${index}`);
});
/*
    value: zero index: 0
    value: one index: 1
    value: two index: 2
*/

//1부터 10까지 수 더하기 (break문 사용)
var i = 1;
var sum = 0
while (true) {
    if (i > 10) {
        break;
    }

    sum += i;
    i++;
}

console.log(sum);    //55

//1부터 10까지의 수 중 3의 배수 제외 (continue 문)
var i = 0;
var sum = 0;
while (true) {
    if (i > 10) {
        break;
    } else if (i % 3 == 0) {
        i++;
        continue;
    } else {
        sum += i;
        i++;
    }
}

console.log(sum);    //37