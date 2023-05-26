import logo from './logo.svg'
import './App.css'
import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topic() {
  let params = useParams()
  console.log(params)
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  )
}

let contents = [
  {
    id: 1,
    title: 'HTML',
    description: 'HTML is...',
  },
  { id: 2, title: 'JS', description: 'JS is...' },
  { id: 3, title: 'React', description: 'React is...' },
]
function Topics() {
  let lis = []
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    )
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Routes>
        <Route path="/topics/:topic_id" element={<Topic />}></Route>
      </Routes>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
