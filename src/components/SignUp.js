import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px;
  @media(min-width: 1224px) {
    width: 100%;
  }
`;

const StyledTextField = styled(TextField)`
  display: block!important;
`;

const StyledForm = styled.form`
  margin: 0;
  padding: 0 16px;
`;

const SignUp = () => (
  <StyledForm
    name="subscribe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input style={{ display: 'none' }} type="text" name="form-name" value="subscribe" />
    <StyledTextField
      id="email"
      label="Email"
      name="email"
    />
    <SubmitButton color="primary" raised type="submit">
      Join mailing list
    </SubmitButton>
  </StyledForm>
);


export default SignUp;
