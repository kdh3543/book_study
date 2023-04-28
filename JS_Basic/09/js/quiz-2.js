let radius = document.querySelector('#radius')
let round = document.querySelector('#round')
let area = document.querySelector('#area')
let start = document.querySelector('#start')

start.onclick = function () {
  round.value = 2 * Math.PI * radius.value
  area.value = Math.PI * radius.value * radius.value
}
