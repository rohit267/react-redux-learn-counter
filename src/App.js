import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { increase, decrease, incFive } from "./redux/action/index";
import "./styles.css";

function App(props) {
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          props.increase();
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          props.decrease();
        }}
      >
        DEC
      </button>
      <button
        onClick={() => {
          props.incFive();
        }}
      >
        INC 5
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => {
      dispatch(increase());
    },
    decrease: () => {
      dispatch(decrease());
    },
    incFive: () => {
      dispatch(incFive());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
