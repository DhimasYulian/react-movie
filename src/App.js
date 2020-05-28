import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import MovieDetail from './components/movies/MovieDetail';

import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/detail/:id" exact component={MovieDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    </MovieProvider>
  );
}

export default App;
