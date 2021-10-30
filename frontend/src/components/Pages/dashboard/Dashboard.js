import React from "react";
import CurrentPurchase from "./CurrentPurchase";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PreviousPurchase from "./TextBox";
import ProductPurchased from "./ProductPurchased";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div className="h-25 ml-3">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <PreviousPurchase
              text={"Prevoius Month Total Purchase"}
              number={"10"}
              color={"primary"}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <CurrentPurchase />
          </div>
        </div>
      </div>
      <div className="ml-3 mt-4">
        <LineChart />
      </div>
      <div className="h-25 ml-3 mb-3">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <ProductPurchased />
          </div>
          <div className="col-md-6 col-sm-12">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
