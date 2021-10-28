import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <div className="d-flex flex-column w-100">
    <div className="header p-2">
      <p className="title fs-2 fw-bold">
        Supplier Overall Purchase Info (Current Month)
      </p>
    </div>
    <div className="w-auto mx-auto">
      <Pie
        data={data}
        width={300}
        height={300}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  </div>
);

export default PieChart;
