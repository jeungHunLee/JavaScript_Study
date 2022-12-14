//비교 연산자
console.log(5 > 3);    //true
console.log(5 < 3);    //false
console.log(1 == 1);    //true
console.log(1 != 1);    //false
console.log(1 == true);    //true
console.log(NaN == NaN);    //false    NaN끼리 == 연산 비교시 false 반환
console.log(NaN != NaN);    //true    != 비교 연산은 true
console.log(true > false);    //true    true는 1과 매칭, false는 0과 매칭

//문자의 아스키코드를 반환하는 함수
console.log('a'.charCodeAt());    //97
console.log('B'.charCodeAt());    //66

//문자 비교
console.log('a' < 'b');    //true
console.log('abc' < 10);    //false  ('abc'는 숫자로 변환시 NaN, NaN과의 비교는 false)
console.log('0' < true);    //true

// ===, !== 연산자
console.log('1' === 1);    //false  (값 비교와 자료형까지 비교)
console.log(1 === true);    //false
console.log(1 === 1);    //true  (값과 자료형이 모두 일치할때 true)
console.log('1' !== 1);    //true

//논리 연산자
console.log(10 > 5 && 1 < 2);    //true
console.log(10 < 5 || 1 < 2);    //true
console.log(!false);             //true
console.log(!(0 > 1));           //true
console.log(!!'');               //false
console.log(!!undefined)         //false
console.log(!!NaN);              //false
console.log(!!null)              //false
console.log(!!0)                 //false