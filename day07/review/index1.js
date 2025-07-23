//

const starbucks = [
  {
    name: "아메리카노",
    price: 4500,
    shot: 2,
    ingredients: ["water", "caffeine"],
  },
  {
    name: "라떼",
    price: 5500,
    shot: 2,
    ingredients: ["water", "milk", "caffeine"],
  },
  {
    name: "돌체라떼",
    price: 6500,
    shot: 3,
    ingredients: ["water", "milk", "caffeine", "condensed milk"],
  },
  {
    name: "바닐라 크림",
    price: 5500,
    shot: 2,
    ingredients: ["milk", "vanilla", "caffeine"],
  },
  {
    name: "카페 모카",
    price: 6000,
    shot: 2,
    ingredients: ["milk", "chocolate", "water", "caffeine"],
  },
];

// 1.라떼 메뉴만 나타내기

// 2. 가격이 6000원 이상 메뉴만 나타내기

// 3. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기

const fn3 = (x) => {
  x.price *= 0.8;
  x.shot -= 1;
  return x;
};

const answer1 = starbucks.map(fn3);

// 4.이름에 라떼가 있으면 재고없음 이름 바꾸고 아니면 그대로

const fn4 = (x) => {
  x.name = x.name.includes("라떼") ? "재고없음" : x.name;
  return x;
};

const answer2 = starbucks.map(fn4);

// 5. caffeine - > decaffeine

const fn5_1 = (x) => {
  return x == "caffeine" ? "decaffeine" : x;
};

const fn5 = (x) => {
  x.ingredients = x.ingredients.map(fn5_1);
  return x;
};

const answer3 = starbucks.map(fn5);

console.log(answer1);
console.log(answer2);
console.log(answer3);
