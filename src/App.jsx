import React, { Component } from 'react';
import ColoredHeader from './ColoredHeader.jsx';
import ButtonList from './ButtonList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red'
    };

    this.changeColor = this.changeColor.bind(this);
  }

  render() {
    return (
      <div>
        <ColoredHeader color={this.state.color}>Colored Header</ColoredHeader>
        <ButtonList
          colors={[
            'Red',
            'Green',
            'Blue',
            'Aquamarine',
            'Lavender',
            'Purple',
            'Grey'
          ]}
          changeColor={this.changeColor}
        />
      </div>
    );
  }

  changeColor(color) {
    this.setState({ color: color });
  }

  // changeColor = color => e => {
  //   this.setState({ color: color });
  // };
}
export default App;
