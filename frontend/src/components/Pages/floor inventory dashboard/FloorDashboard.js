import React from "react";
import LineChart from "./LineChart";
import ProductPurchased from "../dashboard/ProductPurchased";
import TextBox from "../dashboard/TextBox";
import Table from "./Table";

const FloorDashboard = () => {
  return (
    <div className="mx-auto">
      <div className="h-25 ml-3">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <TextBox
              text={"Number of orders made this month"}
              number={"2"}
              color={"primary"}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <TextBox text={"Orders Pending"} color={"light"} />
          </div>
          <div className="col-md-3 col-sm-6">
            <TextBox text={"Orders Approved"} color={"light"} />
          </div>
        </div>
      </div>
      <div className="ml-3 mt-4">
        <LineChart />
      </div>
      <div className="h-25 ml-3 mb-3">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Table text={"New Products Added"} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Table text={"Regular Products Deduct"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorDashboard;
