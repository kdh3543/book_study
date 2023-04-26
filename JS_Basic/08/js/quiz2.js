let checkLists = document.querySelectorAll('.check')

for (let i = 0; i < checkLists.length; i++) {
  checkLists[i].addEventListener('click', function () {
    checkLists[i].parentNode.style.color = '#ccc'
  })
}
