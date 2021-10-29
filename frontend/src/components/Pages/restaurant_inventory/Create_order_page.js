import React, { Component,Fragment } from 'react'

export class Create_order_page extends Component {


    render() {
        return (
            <Fragment>
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-5 order_section">
                            <div className="fixed-right">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>
                                            My order
                                        </h3>
                                    </div>
                                    <div className="card-body">

                                        {/* repeated item */}
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <h4>Lemon juice</h4>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <span className="text-muted">Qty.</span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <input className='form-control' type="number" name="qty" id="qty" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <button className="btn btn-danger">
                                                <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <br />
                                    
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6>Memo</h6>
                                                <textarea name="memo" className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="text-muted">
                                                    <h6><i className="far fa-calendar"></i> Set delivery time</h6>
                                                    <input type="date" className='form-control' name="delivery time" id="" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row align-bottom">
                                                    <button className='btn btn-primary'>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <h2>Items in inventory</h2>
                                <div className="col-12">
                                

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">New product</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">
                                                    Product Name
                                                </label>
                                                <div className="col-sm-9">
                                                    <input type="text" className='form-control' name='product_name'/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">
                                                    Product Description
                                                </label>
                                                <div className="col-sm-9">
                                                    <textarea className='form-control' name='product_description'/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">
                                                    Product Quantity
                                                </label>
                                                <div className="col-sm-9">
                                                    <input type="number" className='form-control' name='product_quantity'/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">
                                                    Product Price
                                                </label>
                                                <div className="col-sm-9">
                                                    <input type="number" className='form-control' name='product_price'/>
                                                </div>
                                            </div>
                                           
                                           
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Add New Item</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                    <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h3>
                                                    <i className="fas fa-plus-circle"></i> Add new item
                                                    </h3>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <h4>Click on item to add it in order list</h4>
                                </div>

                                {/* repeated item */}
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card text-yellow bg-dark">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className='align-middle'>
                                                        Spanish
                                                    </h3>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <h6>Quantity Available</h6>
                                                    <h5>
                                                        10
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Create_order_page
