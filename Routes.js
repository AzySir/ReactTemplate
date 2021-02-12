import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// These components do not exist in this repo however using this as an example
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import Help from './Help'


class Routes extends React.Component {
  render() {
        return (    
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/faq' component={Faq} />      
                <Route path='/help' component={Help} />      
            </Switch>
        );
    }
};
export default Routes;