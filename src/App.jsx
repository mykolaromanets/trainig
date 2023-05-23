import React from 'react';
// // import Counter from './components/Counter.jsx';
// // import Dropdown from './components/Dropdown/Dropdown.jsx';
// import ColorPicker from './components/ColorPicker/ColorPicker';
import Modal from './components/Modal/Modal';
// import Dropdown from 'components/Dropdown/Dropdown';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { RegisterFormUncontroled } from 'components/RegisterForm/RegisterFormUncontroled';
// import { Employees } from './components/Employees/Employee';
// const colorPickerOptions = [
//   { label: 'Red', color: '#ff0000' },
//   { label: 'Green', color: '#00ff00' },
//   { label: 'Blue', color: '#0000ff' },
//   { label: 'Yellow', color: '#ffff00' },
//   { label: 'Cyan', color: '#00ffff' },
//   { label: 'Magenta', color: '#ff00ff' },
// ];

class App extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates explicabo quasi ipsam quas harum ut perferendis nulla
              amet, aspernatur, iure iste doloribus maiores quos voluptatum non
              hic quibusdam officia. Tempora.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )}

        {/* <Employees /> */}
        {/* <RegisterFormUncontroled /> */}
        {/* <RegisterForm /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} />  */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
      </>
    );
  }
}

export default App;
