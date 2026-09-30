import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { arcPercentPlugin, chartColors } from '../../../../../config/chartTheme';

const plugins = [arcPercentPlugin];

class Donut extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
          {
            data: [44, 55, 41, 17, 15],
            backgroundColor: c.series.slice(0, 5),
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '55%',
        layout: { padding: 6 },
        plugins: {
          legend: { position: 'right' },
        },
      },
    };
  }

  render() {
    return (
      <div
        className="donut"
        style={{ position: 'relative', height: 200, maxWidth: 380, margin: '0 auto' }}
      >
        <Doughnut data={this.state.data} options={this.state.options} plugins={plugins} />
      </div>
    );
  }
}

export default Donut;
