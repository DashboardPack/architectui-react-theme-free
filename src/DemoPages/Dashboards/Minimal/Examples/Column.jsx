import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartColors, sparklineOptions } from '../../../../config/chartTheme';

class Column extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data55: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            backgroundColor: c.primary,
          },
          {
            label: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            backgroundColor: c.success,
          },
          {
            label: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            backgroundColor: c.warning,
          },
        ],
      },
      options55: sparklineOptions({
        datasets: { bar: { barPercentage: 0.8, categoryPercentage: 0.55, borderRadius: 2 } },
        scales: { y: { display: false, beginAtZero: true } },
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: $ ${ctx.parsed.y} thousands`,
            },
          },
        },
      }),
    };
  }

  render() {
    return (
      <div className="column" style={{ position: 'relative', height: 210 }}>
        <Bar data={this.state.data55} options={this.state.options55} />
      </div>
    );
  }
}

export default Column;
