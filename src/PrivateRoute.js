import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({
    authenticated,
    component: Component,
    render,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/dangnhap',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;