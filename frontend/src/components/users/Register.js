import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'
import { Redirect } from "react-router";



export class Register extends Component {

    state = {
        isregister: false,
        username : '',
        email: '',
        password: '',
        password2: '',
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };

    onSubmit = async(e) =>{
        e.preventDefault();
        const {username,email, password,password2} = this.state;
        if(password !== password2){
        } else {
            const newUser = {
                username,
                password,
                email
            }
            await this.props.register(newUser)
            this.setState({isregister: true})
        }
        
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value})

    render() {
        const { username,email,password,password2} = this.state;

        if( this.state.isregister){
            return <Redirect to='/createHotel' />
        } else if (this.props.isAuthenticated) {
            if(this.props.profileExists){
                return <Redirect to='/product' />;
              } else {
                return <Redirect to='/createHotel' />;
              }
        }
        return (
            <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 m-auto">
                            <div className="card card-body mt-5">
                            <h2 className="text-center">Register</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                    />
                                </div>
                                <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                    />
                                </div>
                                <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                                </div>
                                <p>
                                Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { register })(Register);
