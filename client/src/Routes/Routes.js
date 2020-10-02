import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Hero from '../components/HeroSection/Hero';
import Contact from '../components/ContactMe/Contact';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/About' component={Hero} />
                <Route exact path='/Contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default Routes;
