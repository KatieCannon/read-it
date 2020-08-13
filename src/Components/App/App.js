import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Display from '../Display/Display';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar />
      <Display/>
    </div>
  );
}

export default App;
