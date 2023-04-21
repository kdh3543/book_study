var coverImage = document.querySelector('#cover')
coverImage.onclick = function () {
  alert('누름')
}

coverImage.onmouseover = () => {
  coverImage.style.border = '5px solid black'
}

coverImage.onmouseout = () => {
  coverImage.style.border = ''
}
