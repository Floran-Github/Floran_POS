import CurrentPurchase from "./CurrentPurchase";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PreviousPurchase from "./PreviousPurchase";
import ProductPurchased from "./ProductPurchased";

import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div className="mx-auto">
      <div className="h-25 ml-3">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <PreviousPurchase />
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
    )
  }
}

export default Dashboard



