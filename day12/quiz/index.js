const id = document.querySelector(".idCheck>input");
const idDupli = document.querySelector(".btn");
const idLength = document.querySelector(".idCheck>span");

const password = document.querySelector(".pwCheck>input");
const num = document.querySelector(".num");
const spc = document.querySelector(".spc");
const pwLength = document.querySelector(".pwCheck>.pwLength");

id.addEventListener("input", (x) => {
  const a = x.target.value.length;
  if (a >= 6 || a <= 20) {
    idLength.style.color = "green";
    idDupli.style.color = "white";
    idDupli.style.backgroundColor = "black";
  } else {
    idLength.style.color = "black";
    idDupli.style.color = "black";
    idDupli.style.backgroundColor = "white";
  }
});
