import { Component } from 'react'

function Control(props) {
  return (
    <ul>
      <li>
        <a
          href="/create"
          onClick={function (e) {
            e.preventDefault()
            props.onChangeMode('create')
          }}
        >
          create
        </a>
      </li>
      <li>
        <a
          href="/update"
          onClick={function (e) {
            e.preventDefault()
            props.onChangeMode('update')
          }}
        >
          update
        </a>
      </li>
      <li>
        <input
          type="button"
          onClick={function (e) {
            e.preventDefault()
            props.onChangeMode('delete')
          }}
          value="delete"
        />
      </li>
    </ul>
  )
}

// class Control extends Component {
//   render() {
//     console.log('Control render')
//     return (
//       <ul>
//         <li>
//           <a
//             href="/create"
//             onClick={function (e) {
//               e.preventDefault()
//               this.props.onChangeMode('create')
//             }.bind(this)}
//           >
//             create
//           </a>
//         </li>
//         <li>
//           <a
//             href="/update"
//             onClick={function (e) {
//               e.preventDefault()
//               this.props.onChangeMode('update')
//             }.bind(this)}
//           >
//             update
//           </a>
//         </li>
//         <li>
//           <input
//             type="button"
//             onClick={function (e) {
//               e.preventDefault()
//               this.props.onChangeMode('delete')
//             }.bind(this)}
//             value="delete"
//           />
//         </li>
//       </ul>
//     )
//   }
// }

export default Control
