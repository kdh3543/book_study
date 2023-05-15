import './App.css'
import React, { Component, useState } from 'react'
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'

// function App() {
//   const title = useState('WEB')
//   const subject = useState('world wide web')
//   const contents = useState([
//     {
//       id: 1,
//       title: 'HTML',
//       desc: 'HTML is for information',
//     },
//     { id: 2, title: 'CSS', desc: 'CSS is for design' },
//     { id: 3, title: 'JS', desc: 'JS is for interactive' },
//   ])
//   return (
//     <div className="App">
//       <Subject title={title} sub={subject}></Subject>
//       <TOC data={contents} />
//       <Content />
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        {
          id: 1,
          title: 'HTML',
          desc: 'HTML is for information',
        },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JS', desc: 'JS is for interactive' },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
      </div>
    )
  }
}

export default App
