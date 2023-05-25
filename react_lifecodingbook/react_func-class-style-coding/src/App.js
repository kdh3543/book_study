import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  let [funcShow, setFuncShow] = useState(true)
  let [classShow, setClassShow] = useState(true)

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false)
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow(false)
        }}
      ></input>
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  )
}

function FuncComp(props) {
  // let numberState = useState(props.initNumber)
  // let number = numberState[0]
  // let setNumber = numberState[1]

  let [number, setNumber] = useState(props.initNumber)
  let [_date, setDate] = useState(new Date().toString())
  // let dateState = useState(new Date().toString())
  // let _date = dateState[0]
  // let setDate = dateState[1]

  useEffect(() => {
    console.log(number)
  }, [number])

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random())
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString())
        }}
      ></input>
    </div>
  )
}

let classStyle = 'color:red'
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  }
  // componentWillMount() {
  //   console.log('%cclass => componentWillMount', classStyle)
  // }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentMount', classStyle)
    return true
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('%cclass => componentWillUpdate', classStyle)
  // }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidMount', classStyle)
  }

  render() {
    console.log('%cclass => render', classStyle)
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() })
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() })
          }.bind(this)}
        ></input>
      </div>
    )
  }
}

export default App
