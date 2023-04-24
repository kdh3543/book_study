var toyRobot = {
  productId: '1234',
  name: 'Robot',
  price: '25,000',
  madeIn: 'Korea',
  quantity: '10',
  showStock: function () {
    document.querySelector('#display').innerHTML =
      this.name + '제품은 ' + this.quantity + '개 남았음'
  },
  showPrice: function () {
    document.querySelector('#display').innerHTML =
      this.name + '제품은 ' + this.price + '원임'
  },
}

// toyRobot.showStock()
toyRobot.showPrice()
