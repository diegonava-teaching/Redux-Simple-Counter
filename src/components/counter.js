import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

class Counter extends React.Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    console.log("this.props: ", this.props);
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100px",
          height: "80px",
          marginTop: "5px",
          marginLeft: "10px"
        }}
      >
        <button onClick={this.handleDecrement} style={{ heigth: "20px" }}>
          -
        </button>
        <div>{this.props.count}</div>
        <button onClick={this.handleIncrement} style={{ heigth: "20px" }}>
          +
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
