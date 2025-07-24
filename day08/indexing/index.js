const num = "123456789"; //-> "123456***"

const quiz1 = [...num].map((x, i) => (i > 5 ? "*" : x)).join("");
console.log(quiz1);
