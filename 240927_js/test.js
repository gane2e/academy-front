let num1 = 1;

console.log(num1++);
console.log(num1);

console.log(++num1);
console.log(num1);

let num2 = 2;
let num3 = 3;

let num4 = num2-- * --num3
console.log(num2, num3, num4)

let x = 3;
x **= 2;
console.log(x)

let str = "안녕"
str += "하세요"
console.log(str);




//배열 {키 : 값}
const person = {
  name : '김준우',
  age : 25,
  married: false,

  info : function func(){
    console.log("이름 :" + this.name)
    console.log("나이 :" + this.age)
    console.log("결혼 :" + this.married === 'false'? '미혼' : '기혼')
  }
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.married)
console.log(typeof person)

person.job = 'programmer';
console.log(person.job)
//값을 수정 가능
person.job = 'programmer2';
console.log(person.job)

console.log(person)
person.info()

console.log('------------------------')

const person1 = {
  name : '김준우',
  age : 25,
  married: false
}

for(const key in person1) {
  console.log(key)
}
console.log('------------------------')

for(let i=1; i<=5; i++){
  for(let j=1; j<=9; j++) {
    if (j % 2 == 0) continue;
      console.log(i + 'X' + j + '=' + i*j );
  }
      console.log('----------------------');
}

const myArray = [true, 3.14, 'Hello', person1];
console.log(myArray, myArray.length)


myArray[0] = !myArray[0];
myArray[1] *= 100;
myArray[2] += 'world!'

console.log(myArray)

myArray.push(123)
console.log(myArray)

const person2 = {
  name : '김달순',
  age : 23,
  languages: ['Korean' , 'English', 'French'],
  education: {
    school: '한국대',
    major : ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

console.log(person2.languages[2], person2.education.major[0])

function func1(){
  console.log("1. func............");
}
function func2(num, num2){
  console.log("2. func : " + num, num2);
}
function func3(){
  console.log("3. func3............");
  return "func3";
}
//결과 --
func1()
func2(20, 40)
const result = func3()
console.log(result)
//결과 --

const 표현식함수 = function func4(){
  console.log("4. func3............");
}
const 표현식함수2 = function func5(num){
  console.log("5. func3............", num);
}
//결과 --
표현식함수()
표현식함수2(100)
//결과 --

const 익명함수 = function(){
  console.log("7. 익명함수............");
}
const 익명함수2 = function(num){
  console.log("7. 익명함수............", num);
}
const 익명함수3 = function(num){
  console.log("8. 익명함수............");
  return num*num
}
//결과 --
익명함수()
익명함수2(100)
const result2 = 익명함수3(100);
console.log(result2)
//결과 --


const 화살표함수 = () => console.log("9. 화살표함수......")
const 화살표함수2 = (num) => console.log("10. 화살표함수......", num)
const 화살표함수3 = (num) => num*num

//결과 --
화살표함수()
화살표함수2(100)
const result3 = 화살표함수3(10);
console.log(result3)
//결과 --

console.log('---------------------')

aaa()
function aaa(){
  console.log("12. 일반함수 호이스트")
}

//bbb() 호이스트 불가
const bbb = function(){
  console.log("13. 표현식함수, 익명함수, 화살표함수 호이스트 불가")
}
bbb()