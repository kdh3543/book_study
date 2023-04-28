function openPop() {
  let newWin = window.open('popup.html', 'my_popup', 'width=400, height=400')
  if (newWin === null) alert('팝업이 차단되어 있음')
}
window.onload = openPop
