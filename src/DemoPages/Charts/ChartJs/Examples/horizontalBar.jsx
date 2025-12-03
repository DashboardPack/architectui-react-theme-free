import React from "react";
import 'chart.js/auto';
import { Bar  } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      borderCapStyle: "round",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  indexAxis: 'y',
};
class BarExample extends React.Component {
  render() {
    return (
      <div>
        <Bar data={data} options={options}/>
      </div>
    );
  }
}

export default BarExample;
