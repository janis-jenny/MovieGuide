import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:movieId" exact component={MovieDetails} />
          <Route>404 Not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
