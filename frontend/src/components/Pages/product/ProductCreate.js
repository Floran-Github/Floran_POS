import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createProduct } from '../../../actions/product';
import { Redirect } from 'react-router';
export class ProductCreate extends Component {
    state = {
        'product_name':'',
        'product_description':'',
        'product_quantity':0,
        'product_price':0,
        'form_submitted':false
    }

    static propTypes = {
        createProduct: PropTypes.func.isRequired,
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e =>{
        e.preventDefault();
        var {product_name,product_description,product_quantity,product_price} = this.state;
        product_quantity = parseInt(product_quantity)
        product_price = parseInt(product_price)
        if(product_name && product_description && product_quantity > 0 && product_price > 0){
            const Product = {product_name,product_description,product_quantity,product_price}
            this.props.createProduct(Product)
            this.setState({
                'product_name':'',
                'product_description':'',
                'product_quantity':0,
                'product_price':0,
                'form_submitted':true
            })

            
        } else {
            alert('Fill the form correctly')
        }
    }
    
    render() {
        const {product_name,product_description,product_quantity,product_price} = this.state;
        const form_submitted = this.state.form_submitted

        if(form_submitted){
            return <Redirect to='/product' />
        }

        return (
            <div className='col-12'>
                <div className="row">
                    <h2>
                        Add New Product
                    </h2>
                </div>
                <div className="card product_card">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Product Name
                                </label>
                                <div className="col-sm-9">
                                    <input type="text" className='form-control' name='product_name' value={product_name} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Product Description
                                </label>
                                <div className="col-sm-9">
                                    <textarea className='form-control' name='product_description' value={product_description} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Product Quantity
                                </label>
                                <div className="col-sm-9">
                                    <input type="number" className='form-control' name='product_quantity' value={product_quantity} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Product Price
                                </label>
                                <div className="col-sm-9">
                                    <input type="number" className='form-control' name='product_price' value={product_price} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-12"></div>
                                <div className="col-md-2">
                                    <input className='btn btn-primary' type='submit' value='Add product'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createProduct})(ProductCreate)
