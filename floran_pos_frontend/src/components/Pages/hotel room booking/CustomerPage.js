import React, { Component } from "react";
import CustomerField from "./CustomerField";
import { Link } from "react-router-dom";

export class CustomerPage extends Component {
  state = {
    name: "",
    age: "",
    is_married: true,
    mobile_number: 0,
    address: "",
    id_proof: "",
    remark: "",
    photoId: "",
    imageURI: null,
  };

  onSubmit = () => {
    console.log(this.state);
  };

  onChange = (id, value) => {
    // console.log(id);
    // console.log(value);
    this.setState({
      [id]: value,
    });
  };

  buildImgTag = () => {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = (
        <div className="row">
          <div className="small-9 small-centered columns">
            <img className="thumbnail" src={this.state.imageURI}></img>
          </div>
        </div>
      );
    return imgTag;
  };

  readURI = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  handleChange = (e) => {
    this.setState({
      id_proof: e.target.files[0],
    });
    this.readURI(e); // maybe call this with webworker or async library?
    if (this.props.onChange !== undefined) this.props.onChange(e); // propagate to parent component
  };
  render() {
    const imgTag = this.buildImgTag();
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 reservationHeader">
            <h1 className="">New Customer</h1>
            <Link to="/reservation" className="btn btn-danger">
              <i className="fa-solid fa-chevron-left"></i> Back
            </Link>
          </div>
          <br />
          <div className="col-md-6">
            <CustomerField
              fieldName={"Customer Name"}
              id={"name"}
              onvalueChange={this.onChange}
            />
            <br />
            <CustomerField
              fieldName={"Customer Age"}
              id={"age"}
              onvalueChange={this.onChange}
              isAge={true}
            />
            <br />
            <CustomerField
              fieldName={"Customer Mobile Number"}
              id={"mobile_number"}
              onvalueChange={this.onChange}
              isNumber={true}
            />
            <br />
            <div className="row">
              <div className="col-12">
                <b>
                  <h4>Customer Marriage Status</h4>
                </b>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-1"></div>
                  <div class="col-4 form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marriedStatus"
                      id="married"
                      value={true}
                      onChange={(e) =>
                        this.onChange("is_married", e.target.value)
                      }
                      checked={this.state.is_married === 'true'}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Married
                    </label>
                  </div>
                  <div class="col-4 form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marriedStatus"
                      id="notmarried"
                      value={false}
                      onChange={(e) =>
                        this.onChange("is_married", e.target.value)
                      }
                      checked={this.state.is_married === 'false'}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Not Married
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <CustomerField
              fieldName={"Customer Adress"}
              id={"address"}
              onvalueChange={this.onChange}
              isTextField={true}
            />
            <br />
          </div>
          <div className="col-md-6">
            <div className="row">
              <label htmlFor={this.state.photoId} className="col-12">
                Customer Id Proof
              </label>
              <input
                id={this.state.id}
                type="file"
                onChange={this.handleChange.bind(this)}
                className="col-12 form-control"
                accept="image/*"
              />
              <div className="col-12">
                <br />
                <h6>Preview</h6>
                {imgTag}
              </div>
            </div>
            <CustomerField
              fieldName={"Any remarks"}
              id={"remark"}
              onvalueChange={this.onChange}
              isTextField={true}
            />
            <div className="row alignCenter">
              <button
                onClick={() => this.onSubmit()}
                className="col-11 btn btn-success text-center"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerPage;
