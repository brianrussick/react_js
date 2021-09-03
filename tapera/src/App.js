import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/loader';
import * as ROUTES from './constants/routes';
import Header from './components/header';
import Footer from './components/footer';

import './styles/output.css';

const Landing = lazy(() => import('./pages/landing'));
const About = lazy(() => import('./pages/about'));
const Investors = lazy(() => import('./pages/investors'));
const NotFound = lazy(() => import('./pages/not-found'));
const OurTech = lazy(() => import ('./pages/tech'));
const Mission = lazy(() => import ('./pages/mission'));

export default function App() {
  return(
    <div>
    <Header />
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.INVESTORS} component={Investors} />
          <Route exact path={ROUTES.OUR_TECH} component={OurTech} />
          <Route exact path={ROUTES.MISSION} component={Mission} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
    <Footer />
    </div>
  );
}
