import React from "react";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Cars", "Trains", "Airplanes"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
      hoverBackgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
    },
  ],
};

class PieExample extends React.Component {
  render() {
    return (
      <div>
        <Pie data={data} width={667} height={270} options={{ maintainAspectRatio: false }}/>
      </div>
    );
  }
}

export default PieExample;
