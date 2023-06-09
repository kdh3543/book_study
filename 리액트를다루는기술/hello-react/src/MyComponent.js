import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하세요, {name} 입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제일 좋아하는 숫자는 {favoriteNumber} 임
      </div>
    );
  }
}

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, {name} 입니다.
//       <br />
//       children 값은 {children} 입니다.
//       <br />
//       제일 좋아하는 숫자는 {favoriteNumber} 임
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
