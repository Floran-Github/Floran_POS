import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthReqRoute = ({ component: Component , auth, ...rest }) => (
    <Route 
        {...rest} 
        render={props=>{
            if(auth.isLoading){
                return <h2>Loading...</h2>
            }else if(auth.token === null){
                return <Redirect to='/login/' />
            } else if (auth.isAuthenticated) {
                return <Component {...props} />
            }
        }}
    />
);

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AuthReqRoute);