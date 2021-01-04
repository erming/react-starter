import {
  SET_FOO,
  SET_BAR
} from "../types";

const initialState = {
  foo: "a",
  bar: "b"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOO:
      return {
        ...state,
        foo: action.foo
      };

    case SET_BAR:
      return {
        ...state,
        bar: action.bar
      };
  }
  return state;
}
