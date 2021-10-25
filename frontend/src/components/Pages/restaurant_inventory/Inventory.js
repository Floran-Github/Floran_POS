import React, { Component,Fragment } from 'react'

export class Inventory extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>
                                Items available in Inventory
                            </h2>
                        </div>
                        <div className="col-md-2">
                            <a href="/restaurant/order" className="btn btn-primary">
                                Place new order
                            </a>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr key='1'>
                                    <td>1</td>
                                    <td>Wheat</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                                <tr key='2'>
                                    <td>1</td>
                                    <td>Wheat</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                                <tr key='3'>
                                    <td>1</td>
                                    <td>Wheat</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                                <tr key='4'>
                                    <td>1</td>
                                    <td>Wheat</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                                <tr key='5'>
                                    <td>1</td>
                                    <td>Wheat</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment> 
        )
    }
}

export default Inventory
