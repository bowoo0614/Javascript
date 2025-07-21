// 유저에게 프롬프트로 비밀번호 설정을 입력받고,
// 1. 비밀번호 길이가 4에서 12글자까지만 허용, 틀리면 -> 비밀번호 길이가 맞지않습니다.
// 2. 비밀번호에 @,!,# 중 하나가 포함되어야 허용, 틀리면 -> 비밀번호에 @, !, #이 없습니다.
// 3. 비밀번호 시작이 it로 해야 허용, 틀리면 -> 비밀번호 시작이 it가 아닙니다.
// 다 통과되면 올바르게 비밀번호 만들었습니다!

const password = window.prompt("비밀번호 설정");

const password_length = 4 <= password.length || password.length1 <= 12;

const password_includes =
  password.includes("@") || password.includes("#") || password.includes("!");

const password_startsWith = password.startsWith("it");

if (
  !!password_includes(password) &&
  !!password_length(password) &&
  !!password_startsWith(password)
) {
  window.alert("올바르게 비밀번호 만들었습니다!");
} else {
  if (!password_length(password)) {
    window.alert("비밀번호 길이가 맞지않습니다.");
  }
  if (!password_includes(password)) {
    window.alert("비밀번호에 @, !, #이 없습니다.");
  }
  if (!password_startsWith(password)) {
    window.alert("비밀번호 시작이 it가 아닙니다.");
  }
}
