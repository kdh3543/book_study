import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const name = 'react';
    return <MyComponent />;
  }
}

// function App() {
//   const name = 'react';
//   return <div className="react">{name}</div>;
// }

export default App;
