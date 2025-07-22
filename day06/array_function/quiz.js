//1. [3,6,9,12,15] 배열을 각각 요소를 두배하고 더하기 10해서
// 콘솔로 나타내기

const quiz1 = (x) => {
  return x * 2 + 10;
};
const arr1 = [3, 6, 9, 12, 15].map(quiz1);

//2. [1,2,3,4,5,6,7,8,9,10]배열을 각각 요소에서
//홀수면 두배, 짝수면 세배 해서 결과를 콘솔로 나타내기

const quiz2 = (x) => {
  return x % 2 ? x * 3 : x * 2;
};
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz2);

//3. [1,2,3,4,5,6,7,8,9,10]배열을 각각 요소에서
// 5보다 작으면 1로 크면 2로 해서 결과를 콘솔로 나타내기

const quiz3 = (x) => {
  return x < 5 ? 1 : 2;
};
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz3);

//4. [1,2,3,4,5,6,7,8,9,10]배열을 각각 요소에서
//3의 배수면 "❤"로 아니면 "😊"로 해서 결과를 콘솔로 나타내기

const quiz4 = (x) => {
  return x % 3 == 0 ? "❤" : "😊";
};
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz4);

//5. ["apple", "mango", "juice", "kiwi", "strawbeery"]
//요소를 문자의 길이로 바꿔서 콘솔로 나타내기
//[5,5,5,4,10]

const quiz5 = (x) => {
  return x.length;
};
const arr5 = ["apple", "mango", "juice", "kiwi", "strawbeery"].map(quiz5);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
