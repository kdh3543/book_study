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
      mode: 'read',
      selected_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
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
    console.log('App render')
    var _title,
      _desc = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if ((this.state.mode = 'read')) {
      let i = 0
      while (i < this.state.contents.length) {
        let data = this.state.contents[i]
        if (data.id === this.state.selected_id) {
          _title = data.title
          _desc = data.desc
          break
        }
        i = i + 1
      }
    }
    console.log('render', this)
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' })
          }.bind(this)}
        />
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            debugger
            this.setState({ mode: 'read', selected_id: Number(id) })
          }.bind(this)}
        />
        <Content title={_title} desc={_desc} />
      </div>
    )
  }
}

export default App
