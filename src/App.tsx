import React from "react";
import "./App.css";
import LocalStorageComponent from "./LocalStorageComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Local Storage Example</h1>
      <LocalStorageComponent />
    </div>
  );
};

export default App;
