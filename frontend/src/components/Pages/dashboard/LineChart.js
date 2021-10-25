import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "# of Votes",
      data: [8, 14, 9, 1, 6, 17],
      fill: false,
      backgroundColor: "rgb(3, 177, 252)",
      borderColor: "rgba(3, 177, 252, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  <div className="p-4 border mb-3">
    <Line data={data} options={options} width={1400} height={500} />
  </div>
);

export default LineChart;