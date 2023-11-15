import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options4: {
        chart: {
          id: 'apexchart-example-2'
        },
        labels: ['A', 'B', 'C', 'D', 'E'],
      },
      series4: [44, 55, 41, 17, 15],
    }
  }

  render() {

    return (
      <div className="donut text-center">
        <Chart options={this.state.options4} series={this.state.series4} type="donut" width="50%" />
      </div>
    );
  }
}

export default Donut;
