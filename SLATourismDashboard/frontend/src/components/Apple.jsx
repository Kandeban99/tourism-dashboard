import React from "react";

class Apple extends React.Component {
  render() {
    const { fruitInfo } = this.props;
    const { type, color, taste } = fruitInfo || {};

    return (
      <>
        <h2>Apple Component using class component</h2>
        <p>Type: {type}</p>
        <p>Color: {color}</p>
        <p>Taste: {taste}</p>   
      </>
    );
  }
}

export default Apple;
