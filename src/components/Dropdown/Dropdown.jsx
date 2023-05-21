import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button className="Dropdown__toggle" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее окно</div>
        )}
      </div>
    );
  }
}
export default Dropdown;
