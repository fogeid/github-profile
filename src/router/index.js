import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;