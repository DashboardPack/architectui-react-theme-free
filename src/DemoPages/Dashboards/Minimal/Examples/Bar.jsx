import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartColors, sparklineOptions } from '../../../../config/chartTheme';

class Bar2 extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      data66: {
        labels: [
          '85+',
          '80-84',
          '75-79',
          '70-74',
          '65-69',
          '60-64',
          '55-59',
          '50-54',
          '45-49',
          '40-44',
          '35-39',
          '30-34',
          '25-29',
          '20-24',
          '15-19',
          '10-14',
          '5-9',
          '0-4',
        ],
        datasets: [
          {
            label: 'Males',
            data: [
              0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5,
              3,
            ],
            backgroundColor: c.success,
          },
          {
            label: 'Females',
            data: [
              -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1,
              -4, -4.1, -3.4, -3.1, -2.8,
            ],
            backgroundColor: c.danger,
          },
        ],
      },
      // Population pyramid: stacked horizontal bars, females drawn as negative values.
      options66: sparklineOptions({
        indexAxis: 'y',
        interaction: { mode: 'nearest', intersect: true },
        datasets: { bar: { barPercentage: 0.8, categoryPercentage: 1, borderRadius: 2 } },
        scales: {
          x: { display: false, stacked: true, min: -5, max: 5 },
          y: { display: false, stacked: true },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${Math.abs(ctx.parsed.x)}%`,
            },
          },
        },
      }),
    };
  }

  render() {
    return (
      <div className="bar" style={{ position: 'relative', height: 210 }}>
        <Bar data={this.state.data66} options={this.state.options66} />
      </div>
    );
  }
}

export default Bar2;
