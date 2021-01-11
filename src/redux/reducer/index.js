import types from "../action/type";

const initialState = {
  count: 0,
  todos: []
};

function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === types.INC) {
    state.count = state.count + 1;
  }
  if (action.type === types.DEC) {
    state.count = state.count - 1;
  }
  if (action.type === types.INCFIVE) {
    state.count = state.count + 5;
  }
  if (action.type === types.ADD_TODO) {
    state.todos = [...state.todos, action.payload];
  }
  if (action.type === types.REMOVE_TODO) {
    let oldArr = state.todos;
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
      if (action.payload == i) {
        continue;
      }
      newArr.push(oldArr[i]);
    }
    state.todos = newArr;
  }
  return state;
}

export default rootReducer;
