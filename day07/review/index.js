// ### 1. **숫자 배열 제곱값 구하기**
// Before: [1,2,3,4]
// After: [1,4,9,16]

const fn1 = (x) => {
  return x ** 2;
};
const quiz1 = [1, 2, 3, 4].map(fn1);

// ### 2. **이름 배열 대문자로 변환하기**
// Before: ['hong', 'kim', 'lee']
// After: ['HONG','KIM','LEE']

const fn2 = (x) => {
  return x.toUpperCase();
};
const quiz2 = ["hong", "kim", "lee"].map(fn2);

// ### 3. **점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기**
// Before: [85, 42, 77] 60점 미만
// After: ['합격','불합격', '합격']

const fn3 = (x) => {
  return x < 60 ? "불합격" : "합격";
};
const quiz3 = [85, 42, 77].map(fn3);

// ### 3. **상품 할인 가격 20% 배열 만들기**
// Before: [10000, 20000, 15000]
// After: [8000, 16000, 12000]

const fn4 = (x) => {
  return x * 0.8;
};
const quiz4 = [10000, 20000, 15000].map(fn4);

// ### 3. **학생 객체 배열에서 이름만 추출하기**
// Before: [{name : '홍길동', age: 16 },{name : '김철수', age: 17 }]
// After: ['홍길동','김철수']

const fn5 = (x) => {
  return x.name;
};
const quiz5 = [
  { name: "홍길동", age: 16 },
  { name: "김철수", age: 17 },
].map(fn5);

console.log(quiz1);
console.log(quiz2);
console.log(quiz3);
console.log(quiz4);
console.log(quiz5);
