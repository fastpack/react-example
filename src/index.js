import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* randomNumber(action) {
  yield put({
    type: "SET_RANDOM",
    payload: { num: Math.floor(Math.random() * 100) }
  });
}
function* randomNumberSaga() {
  yield takeEvery("RANDOM_REQUESTED", randomNumber);
}

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET_RANDOM":
      return action.payload.num;
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
let store = createStore(counter, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(randomNumberSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
