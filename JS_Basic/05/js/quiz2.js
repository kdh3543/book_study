var a = prompt('비교할 첫 번째 숫자: ')
var b = prompt('비교할 두 번째 숫자: ')
function checkNum(a, b) {
  if (a > b) {
    alert(`${a}이 ${b}보다 큽니다.`)
  } else {
    alert(`${b}이 ${a}보다 큽니다.`)
  }
}

checkNum(a, b)
