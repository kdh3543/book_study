import store from '../store'
import { useEffect, useState } from 'react'

export default function DisplayNumber(props) {
  const [number, setNumber] = useState(store.getState().number)
  useEffect(() => {
    store.subscribe(function () {
      setNumber(store.getState().number)
    })
  }, [])
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly />
    </div>
  )
}
