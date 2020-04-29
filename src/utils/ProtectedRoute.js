import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={(renderProps) => {
                if (localStorage.getItem('token')) {
                    return <Component {...renderProps} /> 
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}

export default ProtectedRoute