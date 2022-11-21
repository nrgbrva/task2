import React, { Component } from "react";
import ReactDOM from "react-dom";
import "/public/index.css";
class App extends Component {
  render() {
    return <p className="task">Now I can create component</p>;
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
