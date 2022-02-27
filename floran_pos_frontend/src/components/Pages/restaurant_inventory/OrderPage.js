import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';
import { getOrders } from '../../../actions/order';

export class OrderPage extends Component {
    
    componentDidMount(){
        this.props.getOrders();
    }
    
    
    render() {

        var order;
        var orderitems;
        var itemprd;

        if(this.props.orders.length === 0){
            order= [];
            orderitems = [];
            itemprd = [];
        } else {
            order = this.props.orders
            orderitems = this.props.orderitems
            itemprd = this.props.itemprd
        }
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
                            {
                                order.map((itm,i) => (
                                    <div className="col-lg-3" key={[i]}>
                                        <div className="card" >
                                            <div className="card-header">
                                                <h4>
                                                    Order No: {i+1}
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
                                                        {orderitems[i].map((ord,j) => (
                                                            <tr key={j}>
                                                                <td>{itemprd[i][j]}</td>
                                                                {
                                                                    ord.quantity ? (<td>{ord.quantity}</td>) : (<td>{ord.product_quantity}</td>)
                                                                }
                                                                
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-lg-7 text-muted">
                                                        <h6><u>Memo</u></h6>
                                                        <p>
                                                            {itm.memo}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-5 text-muted">
                                                        <h6><u>Date Issued</u></h6>
                                                        {itm.issued_on}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <a href="/" className="btn btn-secondary">Re-Order</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.order.order,
    orderitems: state.order.orderitems,
    itemprd: state.order.itemprd,
})

export default connect(mapStateToProps,{getOrders})(OrderPage)
