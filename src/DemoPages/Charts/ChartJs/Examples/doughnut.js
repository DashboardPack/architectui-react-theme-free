import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Cars", "Trains", "Airplanes"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
      hoverBackgroundColor: ["#7097e1", "#4dd6a7", "#eb6886"],

    },
  ],
};


class DoughnutExample extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={data} width={667} height={270} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
}

export default DoughnutExample;
