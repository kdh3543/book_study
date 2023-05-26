import { useState } from 'react'
import store from '../store'

export default function AddNumber(props) {
  const [size, setSize] = useState(1)
  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={function () {
          store.dispatch({ type: 'INCREMENT', size })
          // props.onClick(size)
        }}
      />
      <input
        type="text"
        defaultValue={size}
        onChange={function (e) {
          setSize(e.target.value)
        }}
      />
    </div>
  )
}
