import { Component, useState } from 'react'

function TOC(props) {
  const [lists, setLists] = useState([])
  let data = props.data
  let temp = []
  for (let i = 0; i < data.length; i++) {
    temp.push(
      <li>
        <a href={`/content/` + data[i].id}>{data[i].title}</a>
      </li>
    )
  }
  setLists(temp)
  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  )
}

// class TOC extends Component {
//   render() {
//     var lists = []
//     var data = this.props.data
//     var i = 0
//     while (i < data.length) {
//       lists.push(
//         <li key={i}>
//           <a
//             href={'/content/' + data[i].id}
//             data-id={data[i].id}
//             onClick={function (e) {
//               e.preventDefault()
//               this.props.onChangePage(e.target.dataset.id)
//             }.bind(this)}
//           >
//             {data[i].title}
//           </a>
//         </li>
//       )
//       i++
//     }
//     return (
//       <nav>
//         <ul>{lists}</ul>
//       </nav>
//     )
//   }
// }

export default TOC
