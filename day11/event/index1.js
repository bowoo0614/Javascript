const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");

minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML == 0 ? 0 : +num.innerHTML - 1;
  num.style.color = +num.innerHTML < 10 ? "black" : "blue";
});
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
  num.style.color = +num.innerHTML < 10 ? "black" : "blue";
});

//0미만 안되게
//10이상 색상 파란색
//10미만 검정
