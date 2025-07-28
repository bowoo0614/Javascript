//document[html 타입] - querySelector/all(찾기), createElement(만들기)
//element[tag 타입] - innerHTML(글씨넣기), style(CSS), appendChild(자식태그로 넣기)

//1. querySelector/querySelectorAll : 찾아주세요
const a = document.body.querySelector(".hi");
a.innerHTML = "수고하세용";

const time = document.body.querySelector(".time");
time.innerHTML = new Date().toLocaleTimeString();

const quiz = document.body.querySelectorAll(".date>span");
quiz[0].innerHTML = new Date().getMonth() + 1 + "월";
quiz[1].innerHTML = new Date().getDate() + "일";
quiz[2].innerHTML = ["일", "월", "화", "수", "목", "금"][new Date().getDay()] + "요일";
quiz[3].innerHTML = new Date().getHours() + "시";
quiz[4].innerHTML = new Date().getMinutes() + "분";
quiz[5].innerHTML = new Date().getSeconds() + "초";

const button = document.createElement("button");
button.innerHTML = "해피!";
button.style.color = "blue";
button.style.backgroundColor = "yellow";
button.style.fontSize = "20px";
button.style.padding = "10px";
document.body.appendChild(button);
