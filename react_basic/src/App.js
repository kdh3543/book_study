import './App.css'
import React, { Component, useState } from 'react'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control'
import CreateContent from './components/CreateContent'

function App(props) {
  const [mode, setMode] = useState('read')
  const [selected_id, setSelected_id] = useState(2)
  const [subject, setSubject] = useState({
    title: 'WEB',
    sub: 'World Wide Web!',
  })
  const [welcome, setWelcome] = useState({
    title: 'Welcome',
    desc: 'Hello, React!',
  })
  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'HTML',
      desc: 'HTML is for information',
    },
    { id: 2, title: 'CSS', desc: 'CSS is for design' },
    { id: 3, title: 'JS', desc: 'JS is for interactive' },
  ])
  let _title,
    _desc = null,
    _article = null
  if (mode === 'welcome') {
    _article = (
      <ReadContent title={welcome.title} desc={welcome.desc}></ReadContent>
    )
  } else if (mode === 'read') {
    let i = 0
    while (i < contents.length) {
      let data = contents[i]
      if (data.id === selected_id) {
        _title = data.title
        _desc = data.desc
        break
      }
      i = i + 1
    }
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
  } else if (mode === 'create') {
    _article = (
      <CreateContent
        onSubmit={function (_title, _desc) {
          console.log(_title, _desc)
        }}
      ></CreateContent>
    )
  }

  return (
    <div className="App">
      <Subject
        title={subject.title}
        sub={subject.sub}
        onChangePage={function () {
          setMode('welcome')
        }}
      />
      <TOC
        data={contents}
        onChangePage={function (id) {
          setMode('read')
          setSelected_id(Number(id))
        }}
      />
      <Control
        onChangeMode={function (_mode) {
          setMode(_mode)
        }}
      />
      {_article}
    </div>
  )
}

// class App extends Component {
// constructor(props) {
// super(props)
//   this.state = {
//     mode: 'read',
//     selected_id: 2,
//     subject: { title: 'WEB', sub: 'World Wide Web!' },
//     welcome: { title: 'Welcome', desc: 'Hello, React!' },
//     contents: [
//       {
//         id: 1,
//         title: 'HTML',
//         desc: 'HTML is for information',
//       },
//       { id: 2, title: 'CSS', desc: 'CSS is for design' },
//       { id: 3, title: 'JS', desc: 'JS is for interactive' },
//     ],
//   }
// }
//   render() {
//     console.log('App render')
//     console.log(this.state.mode)
//     var _title,
//       _desc = null,
//       _article = null
//     if (this.state.mode === 'welcome') {
//       _title = this.state.welcome.title
//       _desc = this.state.welcome.desc
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>
//     } else if ((this.state.mode = 'read')) {
//       let i = 0
//       while (i < this.state.contents.length) {
//         let data = this.state.contents[i]
//         if (data.id === this.state.selected_id) {
//           _title = data.title
//           _desc = data.desc
//           break
//         }
//         i = i + 1
//       }
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>
//     } else if (this.state.mode === 'create') {
//       _article = <CreateContent></CreateContent>
//     }
//     console.log('render', this)
//     return (
//       <div className="App">
//         <Subject
//           title={this.state.subject.title}
//           sub={this.state.subject.sub}
//           onChangePage={function () {
//             this.setState({ mode: 'welcome' })
//           }.bind(this)}
//         />
//         <TOC
//           data={this.state.contents}
//           onChangePage={function (id) {
//             let t = 'read'
//             this.setState({ mode: t, selected_id: Number(id) })
//           }.bind(this)}
//         />
//         <Control
//           onChangeMode={function (_mode) {
//             console.log(123, _mode)
//             this.setState({ mode: _mode })
//           }.bind(this)}
//         />
//         {_article}
//       </div>
//     )
//   }
// }

export default App
