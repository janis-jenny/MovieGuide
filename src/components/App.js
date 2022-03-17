import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React from 'react';
import loadable from '@loadable/component';
// import Loader from './shared/Loader';

const queryClient = new QueryClient();

// const Loading = () => <Loader />;

const NavbarComponet = loadable(() => import('./navbar/Header'));
const Home = loadable(() => import('./containers/Home'));
const PopularMovies = loadable(() => import('./containers/PopularMovies'));
const UpcomingMovies = loadable(() => import('./containers/UpcomingMovies'));
const PopularTvShows = loadable(() => import('./containers/PopularTvShows'));
const TopRatedShows = loadable(() => import('./containers/TopRatedTvShows'));
const MovieDetails = loadable(() => import('./containers/MovieDetails'));
const TvDetails = loadable(() => import('./containers/TvDetails'));

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
