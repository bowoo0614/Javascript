const button = document.querySelector("button");

// button.addEventListener('이벤트종류',무엇을)

button.addEventListener("click", (x) => {
  alert("ㅅㄱ");
});

//추가 버튼 클릭-> 새롭운 div태그로 아메리카노 라고 적힌 요소 생성

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeend", `<div>아메리카노</div>`);
});
