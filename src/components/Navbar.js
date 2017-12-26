import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MENU from '../constants/menu';
import '../../static/fonts/fontawesome/style.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
`;

const StyledListItem = styled(ListItem)`
  margin: 0;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: -12;
  margin-right: 20;
`;

const StyledTypography = styled(Typography)`
  display: flex;
`;

const DrawerHeader = styled(Typography)`
  padding: 21px 15px 15px 15px;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const LeftButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightButtonContainer = styled.div`

`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    });
  }

  render() {
    return (
      <AppBar position="static">
        <StyledToolbar>
          <LeftButtonContainer>
            <StyledIconButton color="contrast" aria-label="Menu">
              <MenuIcon onClick={this.toggleSideBar} />
            </StyledIconButton>
            <StyledLink to="/">
              <StyledTypography type="title" color="inherit">
                 Year of the Challenge
              </StyledTypography>
            </StyledLink>
          </LeftButtonContainer>
          <RightButtonContainer>
            <IconButton color="contrast" href="https://www.instagram.com/yearofthechallenge/">
              <i className="fa fa-instagram" />
            </IconButton>
            <IconButton color="contrast" href="https://www.facebook.com">
              <i className="fa fa-facebook" />
            </IconButton>
          </RightButtonContainer>
        </StyledToolbar>
        <Drawer open={this.state.isSideBarOpen} onClose={this.toggleSideBar}>
          <div>
            <DrawerHeader type="title" color="inherit">
               Year of the Challenge
            </DrawerHeader>
            <Divider />
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
            </List>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default Navbar;
