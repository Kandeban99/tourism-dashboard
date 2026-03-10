import React from "react";

class StateC2 extends React.Component {
  constructor() {
    super();
    this.state = { list: [], count: 1 };
  }

  addItem = () => {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, `item${prevState.count}`],
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>list</h1>

        <button onClick={this.addItem}>add item</button>

        <ul>
          {this.state.list.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default StateC2;
