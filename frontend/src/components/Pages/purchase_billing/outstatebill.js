import React, { Component } from 'react'

export class outstatebill extends Component {
    render() {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h3>Supplier Detail</h3>
                                        <h6>Name : Masters Computer Enterprises</h6>
                                        <h6>
                                            Address : <br />
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum fugit cumque aliquid, perspiciatis tenetur deleniti assumenda molestias ratione recusandae nobis nostrum! Beatae facilis obcaecati earum consequatur nesciunt magnam voluptatem.
                                        </h6>
                                        <h6>Contact : 7039691123</h6>
                                        <h6>GST Number : 27AEQPK1367J1Z2</h6>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <h6>Invoice : 1</h6>
                                        <h6>Date : July,10,2021</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Item Detials</h3>
                                    </div>
                                    <div className="col-12 table-responsive">
                                        <table className="table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Product name</th>
                                                    <th>Quantity</th>
                                                    <th>Unit price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Laptop</td>
                                                    <td>1</td>
                                                    <td>100.0</td>
                                                    <td>100.0</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <th>Total</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td>100.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th className="text-center" >Taxable <br />Value</th>
                                                    <th>
                                                        <table className="table table-bordered ">
                                                            <tr >
                                                                <th className="text-center" colspan="2">Central Tax</th>
                                                            </tr>
                                                            <tr>
                                                                <th >Rate</th>
                                                                <th >Amount</th>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                    <th>
                                                        <table className="table ">
                                                            <tr>
                                                                <th className="text-center" colspan="2">State Tax</th>
                                                            </tr>
                                                            <tr>
                                                                <th>Rate</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>Product Name</td>
                                                    <td className="text-center" >Taxable <br />Value</td>
                                                    <td>
                                                        <table className="table table-bordered ">
                                                            <tr >
                                                                <td className="text-center" colspan="2">Central Tax</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rate</td>
                                                                <td>Amount</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <table className="table ">
                                                            <tr>
                                                                <td className="text-center" colspan="2">State Tax</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rate</td>
                                                                <td>Amount</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <th>Total</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default outstatebill
