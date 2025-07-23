// const fn1 = (x) => x * 2;
// const fn2 = (x) => x ** 10;
// const fn3 = (x) => (x > 5 ? 1 : 2);
// const fn4 = (x) => (x % 2 ? "홀수" : "짝수");

// const arr = [1, 2, 3, 4, 5].map((x) => x * 2);

// true 남기고 false 없앤다.
// const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x <= 5);

// 1. 4의 배수만 살리기
// const quiz1 = [2, 4, 6, 8, 10].filter((x) => x % 4 == 0);

// 2. 알파벳 a가 포함한 과일만 살리기
// const quiz2 = ["apple", "mango", "grape", "kiwi"].filter((x) =>
//   x.includes("a")
// );

// 3. 장르 로맨스만 살리기
// const quiz3 = [
//   { name: "더글로리", genre: ["범죄", "사회고발", "피카레스크"] },
//   { name: "오징어게임", genre: ["범죄", "스릴러", "블랙코미디"] },
//   { name: "폭싹 속았수다", genre: ["로맨스", "드라마", "휴먼"] },
// ].filter((x) => x.genre.includes("로맨스"));

// console.log(quiz1);
// console.log(quiz2);
// console.log(quiz3);

//3.some /every
//요소 중에 해당 조건인 것이 있니?
//모든 요소가 해당 조건에 만족하니?
const a = [1, 2, 3, 4, 5].some((x) => x == 5); //ture
const b = [1, 2, 3, 4, 5].every((x) => x == 5); //false
