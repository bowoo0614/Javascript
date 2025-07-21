const car = {
  name: "페라리",
  price: 10000000,
  color: "빨간색",
  changeColor: function (x) {
    this.color = x;
  },
  priceUp: function (x) {
    this.price += x;
  },
  changeName: function (x) {
    this.name = x;
  },
};

car.changeName("벤츠");
car.priceUp(1000000);
car.changeColor("검은색");
window.console.log(car);
