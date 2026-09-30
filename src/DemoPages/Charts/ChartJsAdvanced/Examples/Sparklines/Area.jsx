import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { chartColors, sparklineOptions, verticalGradient } from '../../../../../config/chartTheme';

class Area extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data: {
        labels: [
          '19 Sep 00:00',
          '19 Sep 01:30',
          '19 Sep 02:30',
          '19 Sep 03:30',
          '19 Sep 04:30',
          '19 Sep 05:30',
          '19 Sep 06:30',
        ],
        datasets: [
          {
            label: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
            borderColor: c.primary,
            backgroundColor: verticalGradient(c.primary),
            fill: 'origin',
            tension: 0.4,
          },
          {
            label: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
            borderColor: c.success,
            backgroundColor: verticalGradient(c.success),
            fill: 'origin',
            tension: 0.4,
          },
        ],
      },
      options: sparklineOptions(),
    };
  }

  render() {
    return (
      <div className="area" style={{ position: 'relative', height: 200 }}>
        <Line data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Area;
