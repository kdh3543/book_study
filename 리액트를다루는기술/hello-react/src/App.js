import { Component } from 'react';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return <ValidationSample />;
  }
}

// const App = () => {
//   return <EventPractice />;
// };

// class App extends Component {
//   render() {
//     const name = 'react';
//     return (
//       <>
//         <Say />
//         <Counter />
//       </>
//     );
//   }
// }

// function App() {
//   const name = 'react';
//   return <div className="react">{name}</div>;
// }

export default App;
