import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chrono1-app">
      <h1>00</h1>
      <p className="heure">heure</p>
      </div><br/>
      <div className="chrono2-app">
      <h1>:30:</h1>
      <p className="minute">minute</p>
      </div><br/>
      <div className="chrono3-app">
      <h1>00</h1>
      <p className="seconde">seconde</p>
      </div>
    </div>
  );
}

export default App;
