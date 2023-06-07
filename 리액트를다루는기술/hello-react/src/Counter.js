import { Component } from 'react';

class Counter extends Component {
  // 1. constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  // 2. state 초깃값 지정
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
