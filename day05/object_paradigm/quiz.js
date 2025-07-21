// 베스킨라빈스 오브젝트를 만들고,
// 아이스크림 3개 종류를 넣고,
// 매출은 0부터 시작하고
// 판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는 오브젝트 타입
// 만들기

const icecram = {
  icecrams: [
    { name: "딸기", price: 1500 },
    { name: "초코", price: 2000 },
    { name: "메론", price: 2500 },
  ],
  sales: 0,
  sellIceream: function (x) {
    this.sales += this.icecrams[x].price;
  },
};

icecram.sellIceream(0);
icecram.sellIceream(2);
icecram.sellIceream(1);

window.console.log(icecram);
