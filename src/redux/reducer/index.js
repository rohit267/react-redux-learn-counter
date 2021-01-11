import types from "../action/type";

const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  // console.log(action);
  if (action.type === types.INC) {
    state.count = state.count + 1;
  }
  if (action.type === types.DEC) {
    state.count = state.count - 1;
  }
  if (action.type === types.INCFIVE) {
    state.count = state.count + 5;
  }
  return state;
}

export default rootReducer;
