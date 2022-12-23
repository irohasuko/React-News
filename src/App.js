import React from 'react';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <News />
    </div>
  );
}

export default App;
