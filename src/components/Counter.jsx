import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 5,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(preState => {
      return {
        value: preState.value - 1,
      };
    });
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button
            type="button"
            className="Counter__button"
            onClick={this.handleIncrement}
          >
            Увеличить
          </button>
          <button
            type="button"
            className="Counter__button"
            onClick={this.handleDecrement}
          >
            Уменьшить
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
