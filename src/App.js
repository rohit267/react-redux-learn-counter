import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  increase,
  decrease,
  incFive,
  addToDo,
  removeToDo
} from "./redux/action/index";
import Todo from "./component/Todo";
import "./styles.css";

function App(props) {
  // const count = useSelector((state) => state.count);
  const mtodos = useSelector((state) => state.todos);
  const [newToDo, setNewToDo] = useState("");

  useEffect(() => {
    // console.log(mtodos);
  }, []);

  function handleNewToDo(e) {
    setNewToDo(e.target.value);
  }

  function handleRemove(i) {
    props.removeToDo(i);
  }

  function handleAddToDO() {
    let newTo = newToDo;
    props.addToDo(newTo);
    setNewToDo("");
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="todoList">
        {mtodos.map((e, i) => (
          <Todo remove={() => handleRemove(i)} key={i}>
            {e}
          </Todo>
        ))}
      </div>
      <div className="addTodo">
        <textarea onChange={handleNewToDo} value={newToDo} />
        <br />
        <button onClick={handleAddToDO}>Add</button>
      </div>
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
    },
    addToDo: (newToDo) => {
      dispatch(addToDo(newToDo));
    },
    removeToDo: (i) => {
      dispatch(removeToDo(i));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
