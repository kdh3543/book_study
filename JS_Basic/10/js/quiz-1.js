function openCurrent() {
  let newWin = window.open('current.html', '', 'width=300,height=50')
  if (newWin === null) alert('팝업이 차단됨')
}

window.onload(openCurrent())
