let checkbx = document.querySelectorAll('.checkbx')
let price = 24000
let total = document.querySelector('#total')
total.value = price + '원'

for (let i = 0; i < checkbx.length; i++) {
  checkbx[i].onclick = function () {
    if (checkbx[i].checked === true) {
      price += parseInt(checkbx[i].value)
    } else {
      price -= parseInt(checkbx[i].value)
    }
    total.value = price + '원'
  }
}
