// const { add, sub } = require("./math")
// 모듈이란? : 기능별로 만들어져 있는 각각의 js파일
// console.log(add(1,2))
// console.log(sub(1,2))

// -> commonJS 주요기능은 require 함수

// //ESM = ES module System 
// //ESM 과 commonJS 는 함께 사용할 수 없음.

//ESM방식은 확장자 명시 중요!

// ----------------------------------------//

import mul , {add,sub} from "./math.js";

// console.log(add(1,2))
// console.log(sub(1,2))
// console.log(mul(1,4))

// ----------------------------------------//

//라이브러리에서 무언가를 가져올때는 라이브러리의 이름만 명시하면 된다.
import randomColor from "randomcolor";

const color =randomColor();

console.log(color);

// node_modules 파일은 라이브러리의 정보들을 가지고있는 파일이다.
// 혹여나 공유할때에는 이 파일은 삭제하고 보내도 상관이없다.(파일의 용량을 줄이기위해)
// 터미널에서 npm i 만입력해주어도 package 데이터에 dependencies 되어있는 npm들을 찾아서 다운로드함