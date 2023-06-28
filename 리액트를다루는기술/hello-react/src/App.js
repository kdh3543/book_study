import { Component } from 'react';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <IterationSample />
      </div>
    );
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
