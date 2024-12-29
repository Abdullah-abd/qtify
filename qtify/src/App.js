import './App.css';
import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Cards from "./component/AlbumCard/AlbumCard"
import Section from './component/Section/Section';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Section/>
    </>
  );
}

export default App;
