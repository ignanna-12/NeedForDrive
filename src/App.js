import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Start from './components/app-start/Start';
import Order from './components/order/Order';

function App() {
  return (
    <div className="app-wrapper">
      <Route exact path="/NeedForDrive/" component={Start} />
      <Route path="/Order/:city?/:point?/:model?/:add?" component={Order} />
    </div>
  );
}

export default App;
