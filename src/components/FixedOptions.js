import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SignUp from './SignUp';
import SubmitChallengePopup from './SubmitChallengePopup';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';
import Link from 'gatsby-link';
import MENU from '../constants/menu';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
`;

const StyledListItem = styled(ListItem)`
  margin: 0;
  cursor: pointer;
`;

const Container = styled.div`
  background: white;
  padding: 15px;
  @media(min-width: 1224px) {
    position: fixed;
    top: 115px;
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
        <List>
          {
            MENU.map(item => (
              <StyledListItem key={item.link}>
                <StyledLink to={item.link}>
                  {item.name}
                </StyledLink>
              </StyledListItem>
            ))
          }
          <StyledListItem onClick={this.togglePopup} >
            Send us a challenge
          </StyledListItem>
        </List>
        <SubmitChallengePopup
          isOpen={this.state.isPopupOpen}
          handleClose={this.togglePopup}
        />
        <SignUp />
      </Container>
    );
  }
}

export default FixedOptions;
