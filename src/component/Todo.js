import React from "react";

function TodoItem(props) {
  return (
    <div>
      {props.children}
      <span
        onClick={props.remove}
        style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
      >
        x
      </span>
    </div>
  );
}

export default TodoItem;
