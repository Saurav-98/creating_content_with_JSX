import React from "react";
import "./index.css";

const App = () => {
  //   const date = new Date();
  //   const time = date.toLocaleTimeString();
  return (
    <div>
      <h2>This is my App!</h2>
      <p>
        {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
      </p>
      <input type="number" min={1} max={20} readOnly placeholder="my name" />
    </div>
  );
};

export default App;
