import React, { Component,Fragment, memo } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFloorInventoryItems } from '../../../actions/floorinventory';
import { getProducts } from '../../../actions/product';
import { createOrder } from '../../../actions/order';

export class Create_order_page extends Component {
    convertDate = () => {
        var date = new Date(),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }

    state = {
        index: 0,
        children : [],
        submitted: false,
        prd: [],

        newprd : [],
        prdData:[],
        memo:'',
        delievery_date: this.convertDate(),

        product_name:'',
        product_name:'',
        product_quantity:''
    }

    componentDidMount(){
        this.props.getFloorInventoryItems();
        this.props.getProducts();
    }

    validate = () =>{
        if(this.state.prd.length == 0){
            return false
        } else{
            return true
        }
    }

    createOrderfunc = () =>{
        var {memo,delievery_date,prdData,newprd} = this.state
        let check = this.validate();

        if(check){
            const Order = {memo,delievery_date,prdData,newprd}
            this.props.createOrder(Order);

            this.setState({
                submitted:true
            })

        }
    }

    orderChild = (name,qty) => {
        var id = this.state.index
        return (
            <div key={id}>
                <div className="row">
                    <div className="col-lg-7">
                        <h4>{name}</h4>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <span className="text-muted">Qty.</span>
                            </div>
                            <div className="col-lg-8">
                                <input className='form-control' type="number" name="qty" id="qty" defaultValue={qty}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <button className="btn btn-danger" onClick={() => this.deleteRow(name)}>
                        <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                <br />
            </div>
            
        )
    }

    orderNewChild = (name,qty) => {
        var id = this.state.index
        return (
            <div key={id}>
                <div className="row">
                    <div className="col-lg-7">
                        <h4>{name}</h4>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <span className="text-muted">Qty.</span>
                            </div>
                            <div className="col-lg-8">
                                <input className='form-control' type="number" name="qty" id="qty" defaultValue={qty}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <button className="btn btn-danger" onClick={() => this.deleteRow(name,true)}>
                        <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                <br />
            </div>
            
        )
    }

    appendRow = (id,name,qty=0,new_itm= false) => {
        
        if(this.state.prd.indexOf(name) === -1){
            if(!new_itm){
                var item = [id,name,qty]
                this.setState({
                    index: this.state.index + 1,
                    children: [...this.state.children,this.orderChild(name,qty)],
                    prd: [...this.state.prd,name],
                    prdData: [...this.state.prdData,item] //does not contains new item
                })
            } else {
                this.setState({
                    index: this.state.index + 1,
                    children: [...this.state.children,this.orderNewChild(name,qty)],
                    prd: [...this.state.prd,name],
                })
            }
        } 
    }

    checkPrd = (itmname) => {
        let passcheck = 0;
        let failcheck = 0;
        if(this.props.invPrdData.indexOf(itmname) === -1){
            this.props.products.map((itm,index) => {
                if(itm.product_name == itmname){
                    failcheck = 1
                } else {
                    passcheck = 1
                }
            })
        } else {
            failcheck = 1
        }
        
        let check;
        if(failcheck == 1){
            check = 0
        } else if(passcheck = 1){
            check = 1
        }
        return check
    }

    createNewItem = (itmname,desc,itmqty) => {
        let qty = parseInt(itmqty)
        var myModal= bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
        if(qty > 0 && itmname != '' && desc != ''){
            var check 
            check = this.checkPrd(itmname);
            if(check == 1){
                if(this.state.prd.indexOf(itmname) === -1){

                    let itm = [itmname,desc,qty]
        
                    this.setState({
                        newprd: [...this.state.newprd,itm],
                        product_name:'',
                        product_description:'',
                        product_quantity:''
                    })
        
                    this.appendRow(0,itmname,qty,true)
                    myModal.hide()
                } else{
                    alert("Item Already in list")
                }
            } else {
                alert('Product already Available in inventory')
            }
        } else {
            alert('Enter Information Correctly')
        }

    }

    deleteRow = (name,type=false) => {
        var children = this.state.children;
        var prd = this.state.prd;
        var newprd = this.state.newprd;
        let id = prd.indexOf(name);
        children.splice(id,1)
        prd.splice(id,1)
        
        if(!type){
            this.setState({
                children: children,
                prd:prd
            })
        } else {
            let id;
            for (let i = 0;i < newprd.length; i++){
                if(newprd[i][0] == name){
                    id = i
                    break
                }
            } 
            newprd.splice(id,1)
            this.setState({
                children: children,
                prd:prd,
                newprd:newprd
            })
        }
    }

    onChange = (e) => this.setState({
        [e.target.name] : e.target.value
    });

    render() {
        if(this.state.submitted == true){
            this.props.history.push('/restaurant/order');
        }
        var delievery_date = this.state.delievery_date;
        var memo = this.state.memo;
        var InventoryItems;
        var invPrdData;
        if (this.props.floorinventoryItem.length === 0 && this.props.floorinventoryItem[0] === 0) {
            InventoryItems = [];
            invPrdData = [];
        } else {
            InventoryItems = this.props.floorinventoryItem;
            invPrdData = this.props.invPrdData;

        }

        var productList;
        if (this.props.products.length === 0 && this.props.products[0] === 0) {
          productList = [];
        } else {
          productList = this.props.products;
        }


       
        return (
            <Fragment>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-5 order_section">
                            <div className="fixed-right">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>
                                            My order
                                        </h3>
                                    </div>
                                    <div className="card-body">

                                        {/* repeated item */}
                                        {this.state.children.map(child => child)}
                                        
                                    
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6>Memo</h6>
                                                <textarea name="memo" className='form-control' value={memo} onChange={this.onChange}></textarea>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="text-muted">
                                                    <h6><i className="far fa-calendar"></i> Set delivery time</h6>
                                                    <input type="date" className='form-control' name="delievery_date" value={delievery_date} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row align-bottom">
                                                    <button className='btn btn-primary' onClick={this.createOrderfunc}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                
                                <div className="col-12">
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">New product</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Product Name
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className='form-control' name='product_name' value={this.state.product_name} onChange={this.onChange}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Product Description
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <textarea className='form-control' name='product_description' value={this.state.product_description} onChange={this.onChange}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Product Quantity
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="number" className='form-control' name='product_quantity' value={this.state.product_quantity} onChange={this.onChange}/>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => this.createNewItem(this.state.product_name,this.state.product_description,this.state.product_quantity)}>Add New Item</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cursor card" data-bs-toggle="modal" id='mymodal' data-bs-target="#exampleModal">
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
                                

                                <div className="col-md-12 text-center">
                                    <h4>
                                        <i>
                                            (Click on item to add it in order list)
                                        </i>
                                    </h4>
                                </div>
                                <h2>Items in Floor Inventory</h2>
                                {/* repeated item */}
                                {InventoryItems.map((item,index) => (

                                    <div className="cursor col-12" key={index} onClick={() => this.appendRow(invPrdData[index][0],invPrdData[index][1],item.qty)}>
                                        <div className="card text-yellow bg-dark">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <h3 className='align-middle'>
                                                        {invPrdData[index][1]}
                                                        </h3>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <h6>Quantity Available</h6>
                                                        <h5>
                                                            {item.qty}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                

                            </div>
                            <div className="row">
                                    <div className="col-12">
                                        <h2>Items in Store Inventory</h2>
                                        <div className="row">
                                        {
                                            productList.map((prd,index) => (
                                                <div className="cursor col-md-3 col-6" key={index} onClick={() => this.appendRow(prd.id,prd.product_name)}>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4>
                                                                {prd.product_name}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
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

const mapStateToProps = state => ({
    products: state.product.products,
    floorinventoryItem: state.floorinventory.floorinventory,
    invPrdData: state.floorinventory.invPrdData
})

export default connect(mapStateToProps,{getFloorInventoryItems,getProducts,createOrder})(Create_order_page)
