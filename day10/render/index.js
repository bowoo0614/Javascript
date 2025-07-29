//신문법
const clothes = [
  {
    src: "img/a.jpg",
    brand: "브랜드",
    name: "이름",
    price: "가격",
  },
  {
    src: "img/a.jpg",
    brand: "브랜드",
    name: "이름",
    price: "가격",
  },
];
const itemTag = (item) => ` 
<div class="item">
        <img src="${item.src}" alt="" />
        <div class="info">
          <span class="brand">${item.brand}</span>
          <span class="name">${item.name}</span>
          <span class="price">${item.price}</span>
        </div>
      </div>
`;

const box = document.querySelector(".box");
clothes.forEach((x) => {
  box.insertAdjacentHTML("beforeend", itemTag(x));
});
