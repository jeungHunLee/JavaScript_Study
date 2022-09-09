//배열
//배열 내부 요소 출력하기
const number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    /*
    1
    2
    3
    4
    5
    */
}

//배열의 맨 앞에 요소 추가하기
let value = [2, 3, 4, 5];
value.unshift(1);
console.log(value);    //[1, 2, 3, 4, 5]

//배열의 맨 뒤에 요소 추가하기
value.push(6);
console.log(value);    //[1, 2, 3, 4, 5, 6]

//배열의 요소 수정하기
value[value.length - 1] = 9;
console.log(value);    //[1, 2, 3, 4, 5, 9]

//배열의 마지막 요소 삭제하기
value.pop();
console.log(value);    //[1, 2, 3, 4, 5]

//배열의 첫번째 요소 제거하기
value.shift();
console.log(value);    //[2, 3, 4, 5]

//slice (구간에 대한 새로운 배열 생성하여 반환)
let new_value = value.slice(2);
console.log(new_value);    //[4, 5]

new_value = value.slice(-3, 3);
console.log(new_value);    //[3, 4]

//splice  (현재 배열에 요소 제거)
value.splice(1, 2);    //1번 index부터 2개의 원소 제거
console.log(value);    //[2, 5]

value.splice(1, 1, 9);    //1번 index부터 1개의 원소를 제거하고 그 자리에 9추가
console.log(value);    //[2, 9]

//array에 요소가 존재하는지 확인
const isExist = number.includes(3);    //존재하면 true 없으면 false
console.log(isExist);    //true

//array에 요소 index 찾기
const index1 = number.indexOf(2);
const index2 = number.indexOf(5);
console.log(index1);    //1
console.log(index2);    //4
