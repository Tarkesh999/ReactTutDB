import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from './components/DashBoard';
import Gallery from './components/Gallery';
import Product from './components/Product';
import Registration from './components/Registration';


const AppRouter: React.FC = ():JSX.Element =>  {
  return (
    <Router>
        <div>
        <nav style={{display: 'flex', justifyContent: 'space-between', width: 400}}>
            <h2><Link to="/">Dashboard</Link></h2>
            <h2><Link to="/Gallery">Gallery</Link></h2>
            <h2><Link to="/registration">Registration</Link></h2>
        </nav>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/gallery" component={Gallery} />
            <Route path="/registration" component={Registration} />
            <Route path="/gallery/product/:id" component={Product} />
        </Switch>
        </div>
    </Router>
  );
}

export default AppRouter;
