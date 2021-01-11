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
