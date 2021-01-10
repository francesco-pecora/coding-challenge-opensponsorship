import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import Profile from "./pages/Profile";
import List from "./pages/List";
import Form from "./pages/Form";
import Navigation from "./components/Navigation";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/athletes" component={List} />
              <Route path="/athletes/:id" component={Profile} />
              <Route path="/new-athlete" component={Form} />
              <Route path="/" component={List} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
