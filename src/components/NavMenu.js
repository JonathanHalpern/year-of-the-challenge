import React, { Component } from 'react';
import styled from 'styled-components';
import List, { ListItem } from 'material-ui/List';
import blueGrey from 'material-ui/colors/blueGrey';
import Link from 'gatsby-link';
import MENU from '../constants/menu';
import SubmitChallengeDialog from './SubmitChallengeDialog';

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
  :hover{
    background: ${blueGrey[200]}
  }
`;

class NavMenu extends Component {
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
      <List>
        {
          MENU.map(item => (
            <StyledListItem key={item.link} onClick={this.props.onLinkClick}>
              <StyledLink to={item.link}>
                {item.name}
              </StyledLink>
            </StyledListItem>
          ))
        }
        <StyledListItem onClick={this.togglePopup} >
          Send us a Challenge
        </StyledListItem>
        <SubmitChallengeDialog
          isOpen={this.state.isPopupOpen}
          handleClose={this.togglePopup}
        />
      </List>
    );
  }
}

export default NavMenu;
