import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Reservations } from '../components';
import Users from '../views/Users';

const Routes = () => {
    return (
        <Switch>
            <Route path='/users'>
                <Users />
            </Route>
            <Route path='/'>
                <Reservations />
            </Route>
        </Switch>
    );
};

export default Routes;
