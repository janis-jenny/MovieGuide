import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './containers/MovieDetails';
import MovieList from './containers/MovieList';
import Home from './containers/Home';
import PopularMovies from './containers/PopularMovies';
import UpcomingMovies from './containers/UpcomingMovies';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular" exact component={PopularMovies} />
        <Route path="/upcoming" exact component={UpcomingMovies} />
        <Route path="/search" exact component={MovieList} />
        <Route path="/movie/:movieId" exact component={MovieDetails} />
      </Switch>
    </Router>
  </div>
);

export default App;
