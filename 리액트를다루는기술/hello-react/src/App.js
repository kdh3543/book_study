import { Component } from 'react';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        {/* <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <IterationSample /> */}
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
