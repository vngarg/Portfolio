import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../HeroSection/Hero';
import Contact from '../components/ContactMe/Contact';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/About' component={Hero} />
                <Route exact path='/Contact' component={Contact} />
                <Redirect to='/About' />
            </Switch>
        </div>
    )
}

export default Routes;
