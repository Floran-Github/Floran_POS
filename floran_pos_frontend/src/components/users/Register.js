import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { Redirect } from "react-router";
import "../../css/registerPage.css";

export class Register extends Component {
  state = {
    buttonClicked: false,
    username: "",
    email: "",
    password: "",
    password2: "",
    logo: null,
    hotel_name: "",
    hotel_address: "",
    mobile_number: "",
    gst_number: "",
    bank_name: "",
    account_number: 0,
    IFC_number: "",
    branch_name: "",
    company_pan: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      password2,
      logo,
      hotel_name,
      hotel_address,
      mobile_number,
      gst_number,
      bank_name,
      account_number,
      IFC_number,
      branch_name,
      company_pan,
    } = this.state;
    if (password !== password2) {
      alert("Password not same");
    } else if (parseInt(mobile_number) > 9999999999) {
      alert("Invalid Mobile Number");
    } else {
      this.setState({ buttonClicked: true });
      let formData = new FormData();

      formData.append("username", username);
      formData.append("password", password);
      formData.append("password2", password2);
      formData.append("email", email);
      formData.append("logo", logo);
      formData.append("hotel_name", hotel_name);
      formData.append("hotel_address", hotel_address);
      formData.append("mobile_number", mobile_number);
      formData.append("gst_number", gst_number);
      formData.append("bank_name", bank_name);
      formData.append("account_number", account_number);
      formData.append("IFC_number", IFC_number);
      formData.append("branch_name", branch_name);
      formData.append("company_pan", company_pan);
      console.log(this.state);
      await this.props.register(formData);
      //   this.setState({ isregister: true });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onImageChange = (e) =>
    this.setState({
      logo: e.target.files[0],
    });
  render() {
    const {
      username,
      email,
      password,
      password2,
      logo,
      hotel_name,
      hotel_address,
      mobile_number,
      gst_number,
      bank_name,
      account_number,
      IFC_number,
      branch_name,
      company_pan,
    } = this.state;

    if (this.props.isAuthenticated) {
      return <Redirect to="/product" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body mt-5">
              <h1 className="text-center">Registeration Page</h1>

              <form onSubmit={this.onSubmit} className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="username"
                      onChange={this.onChange}
                      value={username}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      onChange={this.onChange}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={this.onChange}
                      value={password}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      placeholder="Confirm Password"
                      onChange={this.onChange}
                      value={password2}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hotel Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hotel_name"
                      placeholder="Hotel Name"
                      onChange={this.onChange}
                      value={hotel_name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Hotel Mobile Number</label>
                    <input
                      type="number"
                      min="100000000"
                      max="9999999999"
                      className="form-control"
                      name="mobile_number"
                      placeholder="Mobile Number"
                      onChange={this.onChange}
                      value={mobile_number}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Hotel Address</label>
                    <textarea
                      name="hotel_address"
                      placeholder="Hotel Address"
                      value={hotel_address}
                      onChange={this.onChange}
                      rows={8}
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Hotel Logo</label>
                    <input
                      className="form-control"
                      name="logo"
                      onChange={this.onImageChange}
                      type="file"
                      required
                      accept="image/*"
                    />
                  </div>
                  <div className="form-group">
                    <label>GST Number</label>
                    <input
                      className="form-control"
                      name="gst_number"
                      onChange={this.onChange}
                      value={gst_number}
                      placeholder="GST Number"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Bank Name</label>
                    <input
                      className="form-control"
                      name="bank_name"
                      value={bank_name}
                      onChange={this.onChange}
                      placeholder="Bank Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Account Number</label>
                    <input
                      className="form-control"
                      type="number"
                      name="account_number"
                      value={account_number}
                      onChange={this.onChange}
                      placeholder="Account Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>IFC Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="IFC_number"
                      value={IFC_number}
                      onChange={this.onChange}
                      maxLength="10"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Branch Name</label>
                    <input
                      name="branch_name"
                      value={branch_name}
                      onChange={this.onChange}
                      className="form-control"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Pan Number</label>
                    <input
                      className="form-control"
                      name="company_pan"
                      value={company_pan}
                      onChange={this.onChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="row form-group text-center">
                  <div className="col-12">
                    {this.props.isLoading ? (
                      <div className="btn btn-primary">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    )}
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, { register })(Register);
