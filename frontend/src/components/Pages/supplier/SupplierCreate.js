import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createSupplier } from '../../../actions/supplier';
import { Redirect } from 'react-router';

export class SupplierCreate extends Component {

    state = {
        'name':'',
        'address':'',
        'gst_number':'',
        'mobile_number':'',
        'form_submitted':false
    }

    static proptypes = {
        createSupplier: PropTypes.func.isRequired,
    }

    onSubmit = e => {
        e.preventDefault();
        var { name,address,gst_number,mobile_number } = this.state;

        var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');
        var mobileinformat = new RegExp('^[0-9]{10,15}$');
        if (gstinformat.test(gst_number)){

            if(mobileinformat.test(mobile_number)){

                const Supplier = {name,address,gst_number,mobile_number}
                this.props.createSupplier(Supplier)
                this.setState({
                    'name':'',
                    'address':'',
                    'gst_number':'',
                    'mobile_number':'',
                    'form_submitted':true
                })

            } else {
                alert('Invalid Mobile Number')
            }

        } else {
            alert('Invalid GST Number')
        }
        
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })
    
    render() {
        var { name,address,gst_number,mobile_number } = this.state;
        if(this.state.form_submitted){
            <Redirect to='/supplier' />
        }
        return (
            <div className='col-12'>
                <div className="row">
                    <h2>
                        Add New Vendor
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 col-form-lable">Supplier Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="name" id="name" className='form-control' placeholder='Supplier Name' value={name} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="address" className="col-sm-3 col-form-lable">Supplier Address</label>
                                        <div className="col-sm-9">
                                            <textarea name="address" id="address" className='form-control' placeholder='Supplier Address' value={address} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="gst_number" className="col-sm-3 col-form-lable">Supplier GST Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="gst_number" id="gst_number" className='form-control' placeholder='Supplier GST Number' value={gst_number} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="mobile_number" className="col-sm-3 col-form-lable">Supplier Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="mobile_number" id="mobile_number" className='form-control' placeholder='Supplier Mobile Number'value={mobile_number} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-11 col-12">
                                            <input className='btn btn-primary' type='submit' value='Submit'/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{createSupplier})(SupplierCreate)
