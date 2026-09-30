import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import { chartColors } from '../../../../config/chartTheme';

class Mixed extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();

    this.state = {
      dataMixedChart1: {
        labels: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
        datasets: [
          {
            type: 'bar',
            label: 'Website Blog',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
            yAxisID: 'y',
            backgroundColor: c.primary,
            barPercentage: 0.75,
            order: 1,
          },
          {
            type: 'line',
            label: 'Social Media',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
            yAxisID: 'y1',
            borderColor: c.success,
            backgroundColor: c.success,
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 0,
            order: 0,
          },
        ],
      },
      optionsMixedChart1: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: {
            position: 'left',
            beginAtZero: true,
            title: { display: true, text: 'Website Blog' },
          },
          y1: {
            position: 'right',
            grid: { display: false },
            title: { display: true, text: 'Social Media' },
          },
        },
        plugins: {
          legend: { position: 'bottom' },
        },
      },
    };
  }

  render() {
    return (
      <div className="bar" style={{ position: 'relative', height: 325 }}>
        <Chart
          type="bar"
          data={this.state.dataMixedChart1}
          options={this.state.optionsMixedChart1}
        />
      </div>
    );
  }
}

export default Mixed;
