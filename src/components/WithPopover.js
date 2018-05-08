import React, { Component } from 'react';
import styled from 'styled-components';
import Popover from 'material-ui/Popover';

class WithPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      popperOpen: false,
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }

  handlePopoverOpen(event) {
    this.setState({ anchorEl: event.target });
  }

  handlePopoverClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <div onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose}>
        {this.props.children}
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
        >
          {/* {this.props.popover} */}
          <p>Hey</p>
        </Popover>
      </div>
    );
  }
}

export default WithPopover;
