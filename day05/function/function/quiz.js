// 1. 어떠한 x를 넣으면 제곱을 돌려주는 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기

const variable = +window.prompt("x 입력");
function square(x) {
  return x ** 2;
}
const result = square(variable);
window.console.log(result);

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const variable1 = window.prompt("food 입력");
function delicious(food) {
  return food + "는 맛있다";
}
const result1 = delicious(variable1);
window.console.log(result1);

// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const variable2 = +window.prompt("x 입력");
function isOddofEven(x) {
  return x % 2 == 0 ? "짝수" : "홀수";
}

const result2 = isOddofEven(variable2);
window.console.log(result2);

// 4. 어떠한 x를 넣으면 배열로 [x*1, x*2, x*3]을 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const variable3 = +window.prompt("x 입력");
function threeList(x) {
  return [x * 1, x * 2, x * 3];
}
const result3 = threeList(variable3);
window.console.log(result3);
