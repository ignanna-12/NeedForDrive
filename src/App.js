import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import FirstPage from './components/firstPage/FirstPage';
import OrderPageContainer from './components/order/OrderPageContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route
          path="/OrderPage/:step?/:city?/:point?/:model?/:add?"
          component={OrderPageContainer}
        />
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
