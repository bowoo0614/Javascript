const input = document.querySelector("input");
const span = document.querySelector("span");
const btn = document.querySelector(".btn");

input.addEventListener("input", (x) => {
  const a = x.target.value;
  span.innerHTML = a.length + "/10";
  span.style.color = a.length > 10 ? "red" : "black";
});

btn.addEventListener("click", () => {
  btn.innerHTML = btn.innerHTML == "😎" ? "😛" : "😎";
  input.type = btn.innerHTML == "😎" ? "password" : "text";
});
