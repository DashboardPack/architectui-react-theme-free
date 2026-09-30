import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';
import { chartColors, sparklineOptions } from '../../../../../config/chartTheme';

class Bar extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'series-1',
            data: [30, 40, 25, 50, 49, 21, 70, 51],
            backgroundColor: c.primary,
            barPercentage: 0.7,
          },
        ],
      },
      options: sparklineOptions({
        indexAxis: 'y',
        interaction: { mode: 'index', intersect: false, axis: 'y' },
        scales: { x: { display: false, beginAtZero: true } },
      }),
    };
  }

  render() {
    return (
      <div className="bar" style={{ position: 'relative', height: 200 }}>
        <BarChart data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Bar;
