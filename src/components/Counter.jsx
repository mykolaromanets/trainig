import React from 'react';
import Controls from './Controls';
import './Counter.css';
import Value from './Value';

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
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
