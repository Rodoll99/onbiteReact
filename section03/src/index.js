// const { add, sub } = require("./math")
// 모듈이란? : 기능별로 만들어져 있는 각각의 js파일
// console.log(add(1,2))
// console.log(sub(1,2))

// -> commonJS 주요기능은 require 함수

// //ESM = ES module System 
// //ESM 과 commonJS 는 함께 사용할 수 없음.

//ESM방식은 확장자 명시 중요!
import mul , {add,sub} from "./math.js";

console.log(add(1,2))
console.log(sub(1,2))
console.log(mul(1,4))


