import types from "./type";
export function increase() {
  return { type: types.INC };
}

export function decrease() {
  return {
    type: types.DEC
  };
}

export function incFive() {
  return {
    type: types.INCFIVE
  };
}

export function addToDo(paylaod) {
  // console.log(paylaod);
  return {
    type: types.ADD_TODO,
    payload: paylaod
  };
}

export function removeToDo(paylaod) {
  // console.log(paylaod);
  return {
    type: types.REMOVE_TODO,
    payload: paylaod
  };
}
