import React from "react";
import CurrentPurchase from "./CurrentPurchase";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PreviousPurchase from "./PreviousPurchase";
import ProductPurchased from "./ProductPurchased";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div className="h-25 d-flex p-3">
        <PreviousPurchase />
        <CurrentPurchase />
      </div>
      <div className="p-3">
        <LineChart />
      </div>
      <div className="h-25 d-flex p-3">
        <ProductPurchased />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
