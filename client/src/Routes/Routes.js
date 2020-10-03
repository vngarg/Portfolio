import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Contact from '../Pages/ContactMe/Contact';
import Projects from '../Pages/Projects/Projects.js';
import Experience from '../Pages/Experience/Experience';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/About' component={HomePage} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Experience' component={Experience} />
                <Redirect to='/About' />
            </Switch>
        </div>
    )
}

export default Routes;
