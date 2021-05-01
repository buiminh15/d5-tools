import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { features } from './models/features';
import { featuresComtor } from './models/featuresComtor';
import { featuresExcel } from './models/featuresExcel';
import Home from './views/Home';

const Root = (props) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} />}
        />
        {features.map((feature) => (
          <Route
            key={feature.name}
            path={feature.path}
            component={feature.component}
          />
        ))}
        {featuresComtor.map((feature) => (
          <Route
            key={feature.name}
            path={feature.path}
            component={feature.component}
          />
        ))}
        {featuresExcel.map((feature) => (
          <Route
            key={feature.name}
            path={feature.path}
            component={feature.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Root;
