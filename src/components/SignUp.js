import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px!important;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  display: block!important;
`;

const StyledForm = styled.form`
  margin: 0;
  padding: 0 16px;
  display: inline-block;
`;

const SignUp = () => (
  <StyledForm
    name="subscribe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input style={{ display: 'none' }} type="text" name="form-name" value="subscribe" readOnly />
    <StyledTextField
      id="email"
      label="Email"
      name="email"
    />
    <SubmitButton color="primary" variant="raised" type="submit">
      Join mailing list
    </SubmitButton>
  </StyledForm>
);


export default SignUp;
