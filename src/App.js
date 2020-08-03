import React from 'react';
import './App.css';
import HttpClient from "./components/HttpClient";
import SocketClient from "./components/SocketClient";
function App() {
  return (
    <div className="App">
      <SocketClient/>
    </div>
  );
}

export default App;
