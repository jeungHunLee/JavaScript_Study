//숫자 확인
console.log(typeof 5);    //number
console.log(typeof('5'));    //string

//정수 문자를 숫자로 바꾸거나 실수의 정수부분을 반환하는 함수
console.log(parseInt('5'));    //5
console.log(parseInt(3.14));    //3
console.log(parseInt("abc"));    //NaN (Not a Number의 약자)

//실수 문자를 숫자로 바꾸는 함수
console.log(parseFloat('3.14'));    //3.14

//지수 표기법
console.log(5e4);    //50000
console.log(5e-4);     //0.0005

//산술 연산자
console.log(1 + 2);    //3
console.log(2 - 1);    //1
console.log(2 * 3);    //6
console.log(6 / 4);    //1.5
console.log(2 ** 3);    //8
console.log(7 % 2);    //1

//무한 값
console.log(2 / 0);    //Infinity (에러 발생 x)
console.log(-2 / 0);    //-Infinity
console.log(Infinity - 1);    //Infinity
console.log(Infinity - Infinity);    //NaN
console.log(0 / 0);    //NaN

//형 변환
console.log("hello" + 0);    //hello0  (문자열과 숫자를 더할때 숫자를 문자열로 형변환)
console.log("hello" - 1);    //NaN (숫자가 아닌 문자열 빼기는 불가능)
console.log('5' - 2);    //3  (빼기는 숫자 문자열을 숫자로 형변환)

//부동 소수점 오차
console.log(0.1 + 0.2);    //0.30000000000000004