let userId = document.querySelector('#user-id')
let userPw1 = document.querySelector('#user-pw1')
let userPw2 = document.querySelector('#user-pw2')

userId.onchange = checkId
userPw1.onchange = checkPw
userPw2.onchange = comparePw

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert('4~15자리의 영문과 숫자를 사용하세요')
    userId.focus()
  }
}

function checkPw() {
  if (userPw1.value.length < 8) {
    alert('비밀번호는 8자리 이상 입력해주세요')
    userPw1.value = ''
    userPw1.focus()
  }
}

function comparePw() {
  if (userPw1 !== userPw2) {
    alert('비밀번호를 똑같이 입력해주세요')
    userPw2.value = ''
    userPw2.focus()
  }
}
