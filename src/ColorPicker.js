import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000000', // Default color
    };
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <ChromePicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: this.state.color,
          }}
        ></div>
      </div>
    );
  }
}

export default ColorPicker;
