import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header title="FINANCR" />
      <Dropdown />
    </div>
  );
}

export default App;
