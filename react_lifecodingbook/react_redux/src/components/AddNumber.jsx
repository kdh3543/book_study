import { useState } from 'react'

export default function AddNumber(props) {
  const [size, setSize] = useState(1)
  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={function () {
          props.onClick(size)
        }}
      />
      <input
        type="text"
        value={size}
        onChange={function (e) {
          setSize(e.target.value)
        }}
      />
    </div>
  )
}
