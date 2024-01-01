// src/App.js

import React from 'react';
import ProgressBar from './components/ProgressBar';
import './App.css'; // Link external CSS

const App = () => {
  return (
    <div className="app-container">
      <h1>React Progress Bar</h1>
      <ProgressBar />
    </div>
  );
};

export default App;
