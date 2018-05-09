import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Dimensions from 'react-dimensions';
import Img from 'gatsby-image';
import NavMenu from './NavMenu';

const StyledAppBar = styled(AppBar)`
  @media(max-width: 1223px) {
    position: fixed!important;
    top: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
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
  min-height: 64px!important;
  @media(max-width: 420px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const LeftButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const RightButtonContainer = styled.div`
  a {
    text-decoration: none;
  }
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
      <StyledAppBar position="static">
        <StyledToolbar>
          <LeftButtonContainer>
            <StyledIconButton aria-label="Menu">
              <MenuIcon onClick={this.toggleSideBar} />
            </StyledIconButton>
            <Img
              resolutions={this.props.logoResolutions}
              fadeIn={false}
            />
            <StyledLink to="/">
              <StyledTypography type="title" color="inherit">
                 Year of the Challenge
              </StyledTypography>
            </StyledLink>
          </LeftButtonContainer>
          <RightButtonContainer>
            <IconButton href="https://www.instagram.com/yearofthechallenge/" target="_blank">
              <i className="fa fa-instagram" />
            </IconButton>
            <IconButton href="https://web.facebook.com/groups/2001054326819046/" target="_blank">
              <i className="fa fa-facebook" />
            </IconButton>
          </RightButtonContainer>
        </StyledToolbar>
        <Drawer
          open={this.state.isSideBarOpen}
          onClose={this.toggleSideBar}
          anchor={this.props.containerWidth <= 750 ? 'top' : 'left'}
        >
          <div
            role="button"
            onKeyDown={this.toggleSideBar}
          >
            <DrawerHeader type="title" color="inherit" onClick={this.toggleSideBar}>
              <StyledLink to="/">
                Year of the Challenge
              </StyledLink>
            </DrawerHeader>
            <Divider />
            <NavMenu onLinkClick={this.toggleSideBar} />
          </div>
        </Drawer>
      </StyledAppBar>
    );
  }
}

export default Dimensions()(Navbar);
