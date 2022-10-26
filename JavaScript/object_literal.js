//객체 리터럴
const person = {
    name: '홍길동',
    age: 99,
    gender: 'man',
    say: function() {    //method
        console.log("Hello World!")
    },
};

console.log(person.name);    //홍길동
console.log(person['name']);    //홍길동
console.log(person.age);    //99
console.log(person['age']);    //99

person.gender = "woman";    //속성 값 변경
console.log(person.gender);    //woman

delete person.gender;
console.log(person.gender);    //undefined

person.say();    //Hello World!

//객체의 참조
const a = {name: "hong",};
const b = a;
a.name = "Kim";
console.log(b.name);    //Kim

let c = "hello";
let d = c;    //copy
c = "hi";
console.log(d);    //hello

//객체 literal 내부 속성을 가리키는 this
let object = {
    name: "철수",
    age: 99,
    say: function() {
        console.log("저의 이름은 " + this.name + "이고, 나이는" + this.age + "입니다.");
    }
}

object.say()