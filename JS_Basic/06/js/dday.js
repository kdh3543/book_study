let now = new Date()
let firstDate = new Date('2022-08-02')
let toNow = now.getTime()
let toFirst = firstDate.getTime()
let passedTime = toNow - toFirst
const oneDay = 1000 * 60 * 60 * 24
let passedDay = Math.round(passedTime / oneDay)
document.querySelector('#accent').innerText = passedDay + '일'
calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)

function calcDate(day) {
  let future = toFirst + day * oneDay
  let someday = new Date(future)
  let year = someday.getFullYear()
  let month = someday.getMonth()
  let date = someday.getDate()
  document.querySelector(`#date${day}`).innerText =
    year + '년 ' + month + '월 ' + date + '일'
}
