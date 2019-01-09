import React from "react";
import ReactDOM from "react-dom";
import Apps from "./Apps";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Apps />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
