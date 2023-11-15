import React, { Component } from "react";
import Chart from "react-apexcharts";

class Mixed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsMixedChart1: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 4],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: "Website Blog",
            },
          },
          {
            opposite: true,
            title: {
              text: "Social Media",
            },
          },
        ],
      },
      seriesMixedChart1: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
    };
  }

  render() {
    return (
      <div className="bar">
        <Chart options={this.state.optionsMixedChart1} series={this.state.seriesMixedChart1}
          type="line" width="100%" height="325px"/>
      </div>
    );
  }
}

export default Mixed;
