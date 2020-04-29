import React, { useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'
import Login from './Login'
import Add from './Add'
import Friends from './Friends'


function Header() {
    // const [user, setUser] = useState(false)
    // const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem("token"))
    var userLoggedIn = false
    useEffect(() => {
        getToken()
    }, [])
    const getToken = e => {
        localStorage.getItem("token")
        userLoggedIn = true
    }

    return (
        <div>
            {console.log("The USER IS LOGGED IN: ", userLoggedIn)}
            {userLoggedIn ? (
                <>
                    <Link to="/add-friends">Add Friends</Link>
                    <Link to="/friends">Friends</Link>
                    <Link onClick={localStorage.clear()} to="/login">Logout</Link>
                </>
            ) : (
                    <>
                        <Link to="/login">Login</Link>
                    </>
                )}
            <Switch>
                <ProtectedRoute exact path="/friends" component={Friends} />
                <ProtectedRoute exact path="/add-friends" component={Add} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    )
}

export default Header 