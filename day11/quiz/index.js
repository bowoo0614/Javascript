const data = [
  {
    gender: "M",
    size: "(250~275mm)",
    Composition: "블랙 10팩",
    price: 10000,
  },
  {
    gender: "M",
    size: "(250~275mm)",
    Composition: "스노우화이트5팩 + 블랙 5팩",
    price: 20000,
  },
];

const makeMenu = (x) => `<div class="menu">
        <div class1"info">정보</div>
        <div class="perchase">
          <div class="account">
            <button class="minus">-</button>
            <span class="num">0</span>
            <button class="plus">+</button>
          </div>
          <div class="price">123</div>
        </div>
      </div>`;

const seciton = document.querySelector("section");
data.forEach("beforeend", makeMenu);
