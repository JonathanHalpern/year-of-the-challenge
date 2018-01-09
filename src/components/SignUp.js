import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const SignUp = () => (
  <form
    name="subscribe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input style={{ display: 'none' }} type="text" name="form-name" value="subscribe" />
    <TextField
      id="email"
      label="Email"
      name="email"
      fullWidth
    />
    <SubmitButton color="primary" raised type="submit">
      Send
    </SubmitButton>
  </form>
);


export default SignUp;
