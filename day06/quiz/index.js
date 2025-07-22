const char = window.prompt("문자를 입력해주세요");
function isUpperorLower(x) {
  if (x == x.toUpperCase()) {
    return `${x}은(는) 대문자입니다`;
  } else {
    return `${x}은(는) 소문자입니다`;
  }
}
window.console.log(isUpperorLower(char));

// const char = window.prompt("문자를 입력해주세요");
// function isUpperorLower(x) {
//   return x.toUpperCase() == x ? "대문자" : "소문자";
// }
// window.console.log(`${char}은(는) ${isUpperorLower(char)}입니다`);

// const string = window.prompt("문자열을 입력해주세요");
// const char1 = window.prompt("문자를 입력해주세요");
// function isIncluded(x) {
//   return !!x.includes(x) ? "포함되어 있습니다" : "포함되어 있지 않습니다";
// }
// window.console.log(`${string}에는(는) ${char1}이(가) ${isIncluded(char1)}`);

// const email = window.prompt("이메일을 입력해주세요");
// function adress(x) {
//   return x.includes("@") ? "올바른" : "올바르지 않은";
// }
// window.console.log(`${email}은(는) ${adress(email)} 이메일 형식입니다`);
