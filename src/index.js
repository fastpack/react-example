import React, { Component } from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

function Test() {
  return (
      <>
        <h1>
          Packed with Fastpack! 🚀
        </h1>
        <App />
      </>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
