import { Component } from 'react'

// function Content() {
//   return (
//     <article>
//       <h2>HTML</h2>
//       HTML is HyperText Markup Language
//     </article>
//   )
// }

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

export default Content
