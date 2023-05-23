import React from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  StyledButton,
} from './RegisterForm.styled';

export class RegisterForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <StyledLoginForm onSubmit={this.onSubmit}>
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>
          Username:
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeInput}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Email:
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChangeInput}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChangeInput}
          />
        </StyledLabel>
        <br />
        <br />
        <StyledButton type="submit">Register</StyledButton>
      </StyledLoginForm>
    );
  }
}
