import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';
import { getFloorInventoryItems } from '../../../actions/floorinventory';
export class Inventory extends Component {

    componentDidMount(){
        this.props.getFloorInventoryItems();
    }

    render() {
        var InventoryItems;
        var invPrdData;
        if (this.props.floorinventoryItem.length === 0 && this.props.floorinventoryItem[0] === 0) {
            InventoryItems = [];
            invPrdData = [];
        } else {
            InventoryItems = this.props.floorinventoryItem;
            invPrdData = this.props.invPrdData;

        }

        return (
            <Fragment>
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>
                                Items available in Floor Inventory
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
                                {
                                    InventoryItems.map((items,index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{invPrdData[index][1]}</td>
                                            <td>{items.qty}</td>
                                            <td>{invPrdData[index][2]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment> 
        )
    }
}

const mapStateToProps = state => ({
    floorinventoryItem: state.floorinventory.floorinventory,
    invPrdData: state.floorinventory.invPrdData
})

export default connect(mapStateToProps,{getFloorInventoryItems})(Inventory)
