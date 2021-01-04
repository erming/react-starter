import store from "../store";

import {
  SET_FOO,
  SET_BAR
} from "../types";

export const setFoo = (foo) => {
  store.dispatch({
    type: SET_FOO,
    foo: foo
  });
}

export const setBar = (bar) => {
  store.dispatch({
    type: SET_BAR,
    bar: bar
  });
}
