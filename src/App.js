import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import News from './components/News';

function App() {
  const [category, setCategory] = useState('home');
  return (
    <div className="App">
      <Header />
      <Category setCategory={setCategory}/>
      <News category={category}/>
    </div>
  );
}

export default App;
