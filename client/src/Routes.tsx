import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PLM from './pages/PLMPage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/plm" component={ PLM } />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
