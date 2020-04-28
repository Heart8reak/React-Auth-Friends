import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'

import Login from './Login'
import Add from './Add'
import Friends from './Friends'


function Header() {
    return (
        <div>
            <header>
                <ul>
                    <Link to="/login">Login</Link>
                    <Link to="/add-friends">Add Friends</Link>
                    <Link to="/friends">Friends</Link>
                    <Link onClick={localStorage.clear()} to="/login">Logout</Link>
                </ul>
            </header>
            <Switch>
                <ProtectedRoute exact path="/friends" component={Friends} />
                <ProtectedRoute exact path="/add-friends" component={Add} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    )
}

export default Header 