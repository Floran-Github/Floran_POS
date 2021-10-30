import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthReqRoute = ({ component: Component , auth, ...rest }) => (
    <Route 
        {...rest} 
        render={props=>{
            if(auth.isLoading){
                return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }else if(auth.token === null){
                return <Redirect to='/login' />
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