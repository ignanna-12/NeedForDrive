import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Start from './components/app-start/Start';
import Order from './components/order/Order';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/Order/:city?/:point?/:model?/:add?" component={Order} />
        <Route exact path="/" component={Start} />
      </Switch>
    </div>
  );
}

export default App;
