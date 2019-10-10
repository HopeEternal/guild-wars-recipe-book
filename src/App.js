import React from 'react';
import './App.css';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">
        <header>
          <h1>Guild Wars 2 Recipe Book</h1>
        </header>
        <Recipes />

    </div>
  );
}

export default App;
