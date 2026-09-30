import React, { Component } from 'react';
import ZoomableChart from '../../../../../components/ZoomableChart';
import { chartColors, verticalGradient } from '../../../../../config/chartTheme';

// Two-line axis labels: date, then time.
const labels = ['00:00', '01:30', '02:30', '03:30', '04:30', '05:30', '06:30'].map((time) => [
  '19 Sep',
  time,
]);

class Area extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data: {
        labels,
        datasets: [
          {
            label: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
            borderColor: c.primary,
            backgroundColor: verticalGradient(c.primary),
            fill: 'origin',
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
            borderColor: c.success,
            backgroundColor: verticalGradient(c.success),
            fill: 'origin',
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { ticks: { maxRotation: 0 } },
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: { title: (items) => labels[items[0].dataIndex].join(' ') },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="area">
        <ZoomableChart
          type="line"
          data={this.state.data}
          options={this.state.options}
          height={320}
        />
      </div>
    );
  }
}

export default Area;
