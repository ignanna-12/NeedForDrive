import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import FirstPage from './components/firstPage/FirstPage';
import OrderPage from './components/orderPage/OrderPage';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/OrderPage/:orderId?" component={OrderPage} />
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
