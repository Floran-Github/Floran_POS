import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSuppliers } from '../../../actions/supplier'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export class SupplierPage extends Component {

    static proptypes = {
        suppliers: PropTypes.array.isRequired,
        getSuppliers: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getSuppliers();
    }

    render() {

        var supplier_list;
        if(this.props.suppliers.length === 0){
            supplier_list = []
        } else {
            supplier_list = this.props.suppliers
        }

        return (
            <div className="col-12">

            <div className='row'>
                <div className="col-12">
                    <div className="row">
                        <div className="col-10">
                            <h2>
                                Vendors
                            </h2>
                        </div>
                        <div className="col-2">
                            <a href="/supplier/create" className='btn btn-secondary'><i className="fas fa-plus"></i> New Supplier</a>
                            
                        </div>
                    </div>
                    <hr />
                </div>

                {this.props.suppliers.map((supplier,index) => (
                    <div key={index} className="col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-tools">
                                    <Link className='link' to='/product'>
                                        <i className="fas fa-edit"></i>
                                    </Link>

                                    <Link className='link' to='/product'>
                                        <i className="fas fa-times"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>
                                        {supplier.name}
                                    </h3>
                                </div>
                                <div className="card-text">
                                    <address>
                                        {supplier.address}
                                    </address>
                                    <h6>
                                    GST Number : {supplier.gst_number}
                                    </h6>
                                    <h6>
                                    Mobile Number : {supplier.mobile_number}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    suppliers: state.supplier.suppliers,
})

export default connect(mapStateToProps,{getSuppliers})(SupplierPage)
