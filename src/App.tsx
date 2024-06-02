import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cubes from './Components/Cubes';

function App() {
  return (
    <div className="App">
      <Header />
      <Cubes/>
      <Footer />
    </div>
  );
}

export default App;
