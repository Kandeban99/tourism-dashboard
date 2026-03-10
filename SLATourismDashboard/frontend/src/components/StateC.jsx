import React from "react";

class StateC extends React.Component {
  constructor() {
    super();
    this.state = { color: "pink" };
  }

  render() {
    return (
      <>
        <h1>kisho favorite color is {this.state.color}</h1>
        <button
          onClick={() => {
            this.setState({ color: "green" });
          }}
        >
          change color
        </button>
      </>
    );
  }
}

export default StateC;
