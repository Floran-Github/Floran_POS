import React, { Component } from "react";
import TextBox from "../dashboard/TextBox";
import BomLineChart from "./bomLineChart";
export class bomDashboard extends Component {
  render() {
    let dayList = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    let data = [
      16, 4, 14, 4, 5, 10, 13, 20, 8, 7, 14, 6, 6, 16, 20, 19, 12, 1, 13, 11,
      19, 14, 12, 9, 3, 10, 2, 15, 6, 8, 19,
    ];
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">
            <TextBox
              text={"Current Month Most Sold Food:"}
              number={"Burger"}
              color={"success"}
            />
          </div>
          <div className="col-md-6">
            <TextBox
              text={"Previous Month Most Sold Food:"}
              number={"Burger"}
              color={"warning"}
            />
          </div>
          <div className="col-12 mt-3 mb-3">
            <BomLineChart dayList={dayList} graph_data={data} />
          </div>
          <div className="col-12">

          </div>
        </div>
      </div>
    );
  }
}

export default bomDashboard;
