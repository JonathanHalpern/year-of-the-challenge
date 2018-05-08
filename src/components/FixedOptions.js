import React, { Component } from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import NavMenu from './NavMenu';

const Container = styled.div`
  background: white;
  padding: 15px;
  border-top: 1px solid #aaa;
  margin-top: 50px;
  padding-top: 20px;
  @media(min-width: 650px) {
    @media(max-width: 1223px) {
      display: flex;
    }
  }
  @media(min-width: 1224px) {
    border: none;
    padding-top: 0;
    margin-top: 0;
    position: fixed;
    top: 114px;
    right: 5%;
  }
`;

class FixedOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isPopupOpen: !this.state.isPopupOpen,
    });
  }
  render() {
    return (
      <Container>
        <NavMenu />
        <SignUp />
      </Container>
    );
  }
}

export default FixedOptions;
