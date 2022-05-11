import React from "react";

const CustomerField = ({
  fieldName,
  id,
  onvalueChange,
  maxLength = 99,
  isNumber = false,
  isAge = false,
  isBoolean = false,
  isTextField = false,
}) => {
  if (isTextField === true) {
    return (
      <div className="row">
        <div className="col-12">
          <b>
            <h4>{fieldName}</h4>
          </b>
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            name={fieldName}
            onChange={(e) => onvalueChange(id, e.target.value)}
            placeholder={fieldName}
            id={fieldName}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-12">
          <b>
            <h4>{fieldName}</h4>
          </b>
        </div>
        <div className="col-12">
          {isNumber ? (
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10,15}"
              onChange={(e) => onvalueChange(id, e.target.value)}
            />
          ) : isAge === true ? (
            <input
              type="number"
              className="form-control"
              placeholder="Customer Age"
            />
          ) : (
            <input
              className="form-control"
              type="text"
              placeholder={fieldName}
              maxLength={maxLength}
              onChange={(e) => onvalueChange(id, e.target.value)}
            />
          )}
        </div>
      </div>
    );
  }
};

export default CustomerField;
