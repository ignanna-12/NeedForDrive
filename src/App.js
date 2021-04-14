import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Start from './components/app-start/Start';
import Order from './components/order/Order';
import OrderPage from './components/order/OrderPage';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/OrderPage/:step?/:city?/:point?/:model?/:add?" component={OrderPage} />
        <Route exact path="/" component={Start} />
      </Switch>
    </div>
  );
}

export default App;
