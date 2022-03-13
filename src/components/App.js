import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import NavbarComponet from './navbar/Header';
import MovieDetails from './containers/MovieDetails';
import TvDetails from './containers/TvDetails';
import Home from './containers/Home';
import PopularMovies from './containers/PopularMovies';
import UpcomingMovies from './containers/UpcomingMovies';
import PopularTvShows from './containers/PopularTvShows';
import TopRatedShows from './containers/TopRatedTvShows';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Router>
        <NavbarComponet />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" exact component={PopularMovies} />
          <Route path="/upcoming" exact component={UpcomingMovies} />
          <Route path="/populartv" exact component={PopularTvShows} />
          <Route path="/toprated" exact component={TopRatedShows} />
          <Route path="/movie/:movieId" exact component={MovieDetails} />
          <Route path="/tv/:tvId" exact component={TvDetails} />
        </Switch>
      </Router>
    </div>
  </QueryClientProvider>
);

export default App;
