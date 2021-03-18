import React from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import Slider from './components/slider/Slider';
import StartScreen from './components/startScreen/StartScreen';

function App() {
  return (
    <div className="app-wrapper">
      <SideBar />
      <StartScreen />
      <Slider />
    </div>
  );
}

export default App;
