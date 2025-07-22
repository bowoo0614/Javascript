//quiz
//arr 배열을 줬을 때, 배열안에 있는 요소들을 두배로 해서 돌려주는 함수 만들기

const twice = (x) => {
  return x * 2;
};

const test = [1, 2, 3, 4, 5].map(twice);
console.log(test);
