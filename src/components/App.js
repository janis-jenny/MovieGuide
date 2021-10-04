import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './containers/MovieDetails';
import MovieList from './containers/MovieList';
import Home from './containers/Home';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={MovieList} />
        <Route path="/movie/:movieId" exact component={MovieDetails} />
      </Switch>
    </Router>
  </div>
);

export default App;
