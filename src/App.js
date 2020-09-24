import React, { Component,Suspense } from 'react'
import {Header} from './components/Header/Header';
import { Switch,Route, Redirect } from 'react-router-dom';



const AboutUs = React.lazy(() => import('./components/AboutUs'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Home = React.lazy(() => import('./components/Home'));



export default class App extends Component {
  render() {
    return (
      <section className="container">
          <Header/>
          <Suspense fallback={<></>}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/404" component={NotFound}/>
                <Redirect to="/404" />
            </Switch>
          </Suspense>
      </section>
    )
  }
};

