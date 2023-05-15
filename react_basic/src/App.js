import './App.css'
import React from 'react'
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide"></Subject>
      <Subject title="react" sub="facebook"></Subject>
      <TOC />
      <Content />
    </div>
  )
}

export default App
