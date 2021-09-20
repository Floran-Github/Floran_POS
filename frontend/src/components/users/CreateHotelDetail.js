import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from "react-router";

export class CreateHotelDetail extends Component {

    static propTypes = {
        profileExists: PropTypes.bool
    }

    state = {
        'hotel_logo':'',
        'hotel_name': '',
        'hotel_address':'',
        'mobile_number':'',
        'gst_number':'',
        'bank_name':'',
        'account_name':'',
        'IFC_number':'',
        'branch_name':'',
        'company_pan':''
    }
    
    onChange = e => this.setState({ [e.target.name]:e.target.value})

    render() {
        if(this.props.profileExists){
            return <Redirect to='/product' />;
        }  
        const { hotel_logo, hotel_name, hotel_address,mobile_number,gst_number,bank_name,account_name,IFC_number,branch_name,company_pan} = this.state
       return (
            <div className="container createHomeDetail">
                <form>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Hotel Detail</h2>
                        </div>
                        <hr></hr>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label className='form-label'>Hotel Logo</label>
                                <img className='createHotelDetail_profile_img' src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" alt="" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Hotel Name</label>
                                <input name='hotel_logo' value={hotel_name} onChange={this.onChange} type="text" className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                <label>Hotel Address</label>
                                <textarea name='hotel_address' value={hotel_address} onChange={this.onChange} className='form-control'></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label>Hotel Mobile Number</label>
                                <input name='mobile_number' value={mobile_number} onChange={this.onChange} type="text" maxLength='10' className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                    <label>GST Number</label>
                                    <input name='gst_number' value={gst_number} onChange={this.onChange} type="text" className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                    <label>Bank Name</label>
                                    <input name='bank_name' value={bank_name} type="text" className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                    <label>Account Number</label>
                                    <input name='account_name' value={account_name} type="number" className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                    <label>IFC Number</label>
                                    <input name='IFC_number' value={IFC_number} type="text" maxLength='10' className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                    <label>Branch Name</label>
                                    <input name='branch_name' value={branch_name} type="text" className="form-control"></input>
                            </div>
                            <div className="form-group mb-3">
                                    <label>Company Pan Number</label>
                                    <input name='company_pan' value={company_pan} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <input className="inputButton" type="submit"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profileExists: state.auth.profileExists,
});

export default connect(mapStateToProps)(CreateHotelDetail)