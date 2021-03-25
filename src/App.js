import React from 'react';
import './App.scss';
import Slider from './components/slider/Slider';
import StartScreen from './components/startScreen/StartScreen';

function App() {
  return (
    <div className="app-wrapper">
      <StartScreen />
      <Slider />
    </div>
  );
}

export default App;
