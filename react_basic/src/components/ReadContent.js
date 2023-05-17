import { Component } from 'react'

function ReadContent(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  )
}

// class ReadContent extends Component {
//   render() {
//     return (
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     )
//   }
// }

export default ReadContent
