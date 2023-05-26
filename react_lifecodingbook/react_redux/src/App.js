import { useState } from 'react'
import './App.css'
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'

function App(props) {
  const [number, setNumber] = useState(10)
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot
      // onClick={function (size) {
      //   setNumber(number + size)
      // }}
      />
      <DisplayNumberRoot
      // number={number}
      />
    </div>
  )
}

export default App
