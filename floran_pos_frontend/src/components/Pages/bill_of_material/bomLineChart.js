import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class BomLineChart extends Component {
  state = {
    label: [],
    data1: [],
  };

  componentDidMount() {
    if (this.props.dayList.length !== 0) {
      this.setState({
        label: this.props.dayList,
        data1: this.props.graph_data,
      });
    }
  }

  render() {
    let data = {
      labels: this.state.label,
      datasets: [
        {
          label: "No of Food Items sold", //ourstat
          data: this.state.data1,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        }
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <div className="p-4 border mb-3 container-fluid mx-auto">
        <div className="row">
            <div className="col-12">
                <h2>Number of Items Sold Everyday</h2>
            </div>
            <div className="col-12">
                <Line data={data} options={options} width='100vh' height="40vh" />
            </div>
        </div>
    </div>;
  }
}

export default BomLineChart;
