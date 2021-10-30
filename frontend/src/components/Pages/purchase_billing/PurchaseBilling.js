import React, {  Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSuppliers } from '../../../actions/supplier'
import { createPurchase } from '../../../actions/purchase'
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'


export class PurchaseBilling extends Component {
    state = {
        children : [],
        rowData: [],
        index: 1,
        bill_type:'',
        supplier_name:'',
        supplier_id:'',
        invNumber:'',
        invDate:'',
        grandtotal:0,
        submitted:false,
    }

    static proptypes = {
        createPurchase: PropTypes.func.isRequired,
        suppliers: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        getSuppliers: PropTypes.func.isRequired,
    }


    validate = () => {
        if(this.state.invDate == '' || this.state.invNumber == '' || this.state.supplier_name == '' || this.state.bill_type == ''){
            return false
        } else {
            if(this.state.rowData.length == 0){
                return false
            } else {
                for(var i of this.state.rowData){
                    if(i.includes(0)){
                        return false
                    }
                }
            }
        }
        return true
    }
    createBill = () => {
        var {rowData,bill_type,supplier_name,supplier_id,invNumber,invDate,grandtotal} = this.state
        var check = this.validate();
        if(check){
            const Bill = {rowData,bill_type,supplier_name,supplier_id,invNumber,invDate,grandtotal};
            this.props.createPurchase(Bill);

            this.setState({
                submitted:true
            })


        } else {
            alert('Please fill the bill properly')
        }

    }

    appendRow = () => {
        if(this.state.bill_type == 'instate'){
            this.setState({
                index: this.state.index +1,
                children: [...this.state.children,this.instategstrow()],
                rowData : [...this.state.rowData,[0,0,0,5,5,0]],
            })
        } else if(this.state.bill_type == 'outstate' ){
            this.setState({
                index: this.state.index +1,
                children: [...this.state.children,this.outstategstrow()],
                rowData : [...this.state.rowData,[0,0,0,5,0]],
            })
        } else {
            alert('Select the customer to add the row')
        }
    }

    deleteRow = (id) => {
        var children =this.state.children
        var  rowData =this.state.rowData
        const itemIndex = this.state.children.findIndex(item => item.key == `${id}`);
        if(itemIndex > -1 ){
            children.splice(itemIndex,1)
            rowData[itemIndex] = []
        }
        this.setState({
            children : children,
            rowData : rowData,
            index : children.length > 0 ? this.state.index : 1
        })
    }
    componentDidMount(){
        this.props.getSuppliers();
        // this.appendRow();
    }

    ongstChange = (e,id) => {
        var stateRowData =this.state.rowData
        var rowId = parseInt(id)
        var cellId = parseInt(e.target.id)
        stateRowData[rowId][cellId] = e.target.value  
        this.setState({
            rowData: stateRowData
        })      
        this.calc(id);
    }
    
    onCellInputChange = (value,id,tdid) => {
        var stateRowData =this.state.rowData
        var rowId = parseInt(id)
        var cellId = parseInt(tdid)
        stateRowData[rowId][cellId] = value
        this.setState({
            rowData: stateRowData
        })  


    }

    makeProductnameEditable = (e,id) => {
        var cell = e.target;
        if (cell.dataset.editing !== 'true') {
            cell.dataset.editing = true;
            var text = cell.innerHTML;
            cell.innerHTML = '';
            var input = document.createElement('input');
            input.addEventListener('blur',(e) => this.makeProductNameNonEditable(e,id));
            input.type = "text";
            input.value = text;
            input.classList.add('form-control')
            cell.appendChild(input);
          }
        }

    makeQtyNumberEditable = (e,id) => {
        var cell = e.target;
        if (cell.dataset.editing !== 'true') {
            cell.dataset.editing = true;
            var text = cell.innerHTML;
            cell.innerHTML = '';
            var input = document.createElement('input');
            input.addEventListener('blur', (e) => this.makePrdQtyNonEditable(e,id));
            input.type = "number";
            input.value = text;
            input.classList.add('form-control')
            cell.appendChild(input);
          }
        }

    makePriceNumberEditable = (e,id) => {
        var cell = e.target;
        if (cell.dataset.editing !== 'true') {
            cell.dataset.editing = true;
            var text = cell.innerHTML;
            cell.innerHTML = '';
            var input = document.createElement('input');
            input.addEventListener('blur', (e) => this.makePrdPriceNonEditable(e,id));
            input.type = "number";
            input.value = text;
            input.classList.add('form-control')
            cell.appendChild(input);
          }
        }
        
    makeProductNameNonEditable = (e,id) => {
        var input = e.target;
        var text = input.value;
        var cell = input.parentElement;
        if (cell.dataset.editing === 'true') {
            cell.dataset.editing = false;
            cell.innerHTML = text;
        }
        this.onCellInputChange(cell.innerHTML,id,cell.id)    
    }

    makePrdQtyNonEditable = (e,id) => {
        var input = e.target;
        var text = input.value;
        var cell = input.parentElement;
        if (cell.dataset.editing === 'true') {
            cell.dataset.editing = false;
            cell.innerHTML = text;
        }
        this.onCellInputChange(cell.innerHTML,id,cell.id)   
        this.calc(id)
    }
    
    makePrdPriceNonEditable = (e,id) => {
        var input = e.target;
        var text = input.value;
        var cell = input.parentElement;
        if (cell.dataset.editing === 'true') {
            cell.dataset.editing = false;
            cell.innerHTML = text;
        }
        this.onCellInputChange(cell.innerHTML,id,cell.id) 
        this.calc(id)
    }

    calc = (id) => {
        var stateRowData =this.state.rowData
        var data = stateRowData[id]
        if(this.state.bill_type == 'instate'){
            var price = parseFloat(data[1]) * parseFloat(data[2]) 
            var sgst_total = (price * parseFloat(data[3])) / 100
            var cgst_total = (price * parseFloat(data[4])) /100

            var total = price + sgst_total + cgst_total
            data[5] = total
            document.getElementById(id+'5').innerHTML = total
        } else {
            var price = parseFloat(data[1]) * parseFloat(data[2]) 
            var igst_total = (price * parseFloat(data[3])) / 100
            
            var total = price + igst_total
            data[4] = total
            document.getElementById(id+'4').innerHTML = total
        }

        stateRowData[id] = data
        this.setState({
            rowData: stateRowData
        })
        var grant = 0
        for(var i of this.state.rowData){
            if(i.length > 0){
                grant += i[i.length - 1]
            }
        }
        this.setState({
            grandtotal:grant
        })
        document.getElementById('grant').innerHTML = grant

    }






  
    checkCustomer = (e) => {
        let customer_gst = e.target.value
        let user_gst = this.props.profile[0].gst_number
        var custype = ''
        var cusName = ''
        var cusid = 0
        for(var i of this.props.suppliers){
            if(i.gst_number == customer_gst){
                cusName = i.name;
                cusid = i.id;
                break;
            }
        }
        if(customer_gst[0] == user_gst[0] && customer_gst[1] == user_gst[1]){
            custype = 'instate'

        } else {
            custype = 'outstate'
        }
        if(this.state.bill_type != custype){
            this.setState({
                bill_type:custype,
                index:0,
                children: [],
                supplier_name: cusName,
                supplier_id: cusid,
                rowData: [],
                grandtotal:0
            })
        } else {
            this.setState({
                supplier_name: cusName,
            })
        }
    }

    onInvdetailChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });


    instategstrow =() => {
        var id = this.state.index
        return (
            <tr key={id}>
                <td>{id + 1}</td>
                <td id='0' onMouseDown={(e) => this.makeProductnameEditable(e,id)}></td>
                <td id='1' onMouseDown={(e) => this.makeQtyNumberEditable(e,id)}>0</td>
                <td id='2' onMouseDown={(e) => this.makePriceNumberEditable(e,id)}>0</td>
                <td>
                    <select className='form-control' name="sgst" id="3" onChange = {(e) => this.ongstChange(e,id)} defaultValue='5%'>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </td>
                <td>
                <select className='form-control' name="cgst" id="4" onChange = {(e) => this.ongstChange(e,id)} defaultValue='5%'>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </td>
                <td id={id+'5'} >0</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.deleteRow(id)}>Delete Row</button>
                </td>
            </tr>
        )
        }


    outstategstrow =() => {
        var id = this.state.index
        return (
            <tr key={id}>
                <td>{id + 1}</td>
                <td id='0' onMouseDown={(e) => this.makeProductnameEditable(e,id)}></td>
                <td id='1' onMouseDown={(e) => this.makeQtyNumberEditable(e,id)}>0</td>
                <td id='2' onMouseDown={(e) => this.makePriceNumberEditable(e,id)}>0</td>
                <td>
                    <select className='form-control' id='3' onChange = {(e) => this.ongstChange(e,id)} name="igst" defaultValue='5%'>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </td>
                <td id={id+'4'}>0</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.deleteRow(id)}>Delete Row</button>
                </td>
            </tr>
        )
        }

    


    render() {

        if(this.state.submitted == true){
            this.props.history.push('/purchase');
        }
        
        const bill_type = this.state.bill_type
        return (
            <div className='col-12'>
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <h1>
                                Purchase Billing
                            </h1>
                        </div>
                        <br />
                        <div className="card-text">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <h3>Supplier Name :</h3>
                                    <select name="supplier" id="supplier" onChange={this.checkCustomer} className="form-select" defaultValue='none'>
                                        <option value="none" disabled> Select the Supplier</option>
                                        {this.props.suppliers.map((supplier,index) => (

                                            <option key={index} value={supplier.gst_number}>{supplier.name}</option>
                                            ))}
                                    </select>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group row">
                                        <div className="col-md-3">
                                            <label className="col-form-label">
                                                Invoice Number: 
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="text" className='form-control' onChange={this.onInvdetailChange} name="invNumber" id="invoice_no" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-3">
                                            <label className="col-form-label">
                                                Invoice Date: 
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <input type="date" className='form-control' onChange={this.onInvdetailChange} name="invDate" id="invoice_no" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                                {/* {this.instategstbill} */}
                                {
                                    bill_type == 'instate' ? (
                                        <div className="row">
                                        <div className="col-md-12 table-responsive">
                                            <table className='table table-hover table-bordered border-primary '>
                                                <thead className='table-light'>
                                                    <tr>
                                                        <td>S/N</td>
                                                        <td>Product Name</td>
                                                        <td>Product Quantity</td>
                                                        <td>Price</td>
                                                        <td>S.GST</td>
                                                        <td>C.GST</td>
                                                        <td>Total</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody className='table-light'>
                                                    {this.state.children.map(child => child)}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <button className="btn btn-primary" onClick={this.appendRow}>Add Row</button>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <br /><br />
                                        <div className="col-md-3">
                                            <div className="row">
                                                <button className="btn btn-primary" onClick={this.createBill}>Create Bill</button>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                        </div>
                                        <div className="col-md-3">
                                            <h4>
                                                Grand Total : <span id='grant'>0</span>
                                            </h4>
                                        </div>
                                    </div>
                                    ) : (
                                        bill_type == 'outstate' ? (
                                            <div className="row">
                                                <div className="col-md-12 table-responsive">
                                                    <table className='table table-hover table-bordered border-primary '>
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <td>S/N</td>
                                                                <td>Product Name</td>
                                                                <td>Product Quantity</td>
                                                                <td>Price</td>
                                                                <td>I.GST</td>
                                                                <td>Total</td>
                                                                <td></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='table-light'>
                                                            {this.state.children.map(child => child)}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                    <button className="btn btn-primary" onClick={this.appendRow}>Add Row</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                                <br /><br />
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <button className="btn btn-primary" onClick={this.createBill}>Create Bill</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                </div>
                                                <div className="col-md-3">
                                                    <h4>
                                                        Grand Total : <span id='grant'>0</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row">
                                                <div className="col-md-12 text-center text-muted">
                                                    Select the supplier
                                                </div>
                                            </div>
                                        )
                                        
                                    )
                                }
                               
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = state => ({
    suppliers: state.supplier.suppliers,
    profile: state.auth.user_profile,
})

export default connect(mapStatetoProps,{createPurchase,getSuppliers})(PurchaseBilling)
