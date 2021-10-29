import React, { Component,Fragment } from 'react'

export class OrderPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-10 col-6">
                            <h2>Orders</h2>
                        </div>
                        <div className="col-md-2 col-6">
                            <a href="/restaurant/order/create" className='btn btn-primary'>New Order</a>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        Order No 1
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead className='table-light'>
                                            <tr>
                                                <th>Item</th>
                                                <th>Qty</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>lemon</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>lemon</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>lemon</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-8 text-muted">
                                            <h6><u>Memo</u></h6>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a. Aliquam temporibus hic accusantium quia expedita quaerat quod vel sit, rem repellendus consequuntur? Amet cum quia quasi recusandae illum quas?
                                            </p>
                                        </div>
                                        <div className="col-md-4 text-muted">
                                            <h6><u>Date Issued</u></h6>
                                            2021-5-4
                                        </div>
                                    </div>
                                    <div className="row">
                                        <a href="" className="btn btn-secondary">Re-Order</a>
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

export default OrderPage
