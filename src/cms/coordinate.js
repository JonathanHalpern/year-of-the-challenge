import React, { Component } from 'react';

// This is the editing component
export class CoordinateControl extends Component {
  constructor(props) {
    super(props);
    console.log(props.value);
    this.state = props.value ? props.value : [0, 0];
    this.onChangeX = this.onChangeX.bind(this);
    this.onChangeY = this.onChangeY.bind(this);
  }

  onChangeX(event) {
    const { onChange } = this.props;
    console.log(event.target.value);
    const newState = [event.target.value, this.state[1]];
    this.setState(newState);
    onChange(newState);
  }

  onChangeY(event) {
    const { onChange } = this.props;
    console.log(event.target.value);
    const newState = [this.state[0], event.target.value];
    this.setState(newState);
    onChange(newState);
  }

  render() {
    const x = this.state[0];
    const y = this.state[1];
    return (
        <div 
          className="nc-controlPane-widget"
        >
            <input
                type="number"
                name="appt-coordinate-x"
                onChange={this.onChangeX}
                required
                value={x}
            />
            <input
                type="number"
                name="appt-coordinate-y"
                onChange={this.onChangeY}
                required
                value={y}
            />
        </div>

    );
  }
}

// This is the preview component
export const CoordinatePreview = ({ value }) => <div>{value}</div>;
