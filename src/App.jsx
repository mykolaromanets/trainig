import React from 'react';
// // import Counter from './components/Counter.jsx';
// // import Dropdown from './components/Dropdown/Dropdown.jsx';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Dropdown from 'components/Dropdown/Dropdown';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { RegisterFormUncontroled } from 'components/RegisterForm/RegisterFormUncontroled';
import { Employees } from './components/Employees/Employee';
// const colorPickerOptions = [
//   { label: 'Red', color: '#ff0000' },
//   { label: 'Green', color: '#00ff00' },
//   { label: 'Blue', color: '#0000ff' },
//   { label: 'Yellow', color: '#ffff00' },
//   { label: 'Cyan', color: '#00ffff' },
//   { label: 'Magenta', color: '#ff00ff' },
// ];

const App = () => {
  return (
    <div>
      <Employees />
      {/* <RegisterFormUncontroled /> */}
      {/* <RegisterForm /> */}
      {/* <Dropdown /> */}
      {/* <Counter initialValue={10} />  */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
    </div>
  );
};

export default App;
