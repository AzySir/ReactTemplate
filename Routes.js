import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import Help from './Help.js'


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

<Link to='/home'><li>Home</li></Link>
<Link to={'/about'}><li>About</li></Link>
<Link to={'/contact'}><li>contact</li></Link>
<Link to={'/faq'}><li>faq</li></Link>
<Link to={'/help'}><li>Help</li></Link>