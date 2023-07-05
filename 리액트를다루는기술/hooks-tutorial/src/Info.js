import { useEffect, useState } from 'react'

const Info = () => {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeNickname = (e) => {
    setNickname(e.target.value)
  }

  useEffect(() => {
    console.log('렌더링 완료')
    console.log(name, nickname)
  }, [])

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임이름: </b>
          {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info
