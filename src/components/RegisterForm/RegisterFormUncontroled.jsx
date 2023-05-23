import React from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  StyledButton,
} from './RegisterForm.styled';

export class RegisterFormUncontroled extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });
    form.reset();
  };
  render() {
    return (
      <StyledLoginForm onSubmit={this.onSubmit}>
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>
          Username:
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <br />
        <StyledLabel>
          Email:
          <StyledInput type="text" name="email" />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput type="password" name="password" />
        </StyledLabel>
        <br />
        <br />
        <StyledButton type="submit">Register</StyledButton>
      </StyledLoginForm>
    );
  }
}
