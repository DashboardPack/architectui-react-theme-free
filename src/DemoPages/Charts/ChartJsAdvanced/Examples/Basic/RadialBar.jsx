import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { centerTextPlugin, chartColors, gaugeColors } from '../../../../../config/chartTheme';

const plugins = [centerTextPlugin];

// Radial progress ring: a doughnut with one value and a light track.
class RadialBar extends Component {
  constructor(props) {
    super(props);

    const c = chartColors();
    const value = 68;

    this.state = {
      data: {
        labels: ['RadialBar', ''],
        datasets: [
          {
            data: [value, 100 - value],
            backgroundColor: gaugeColors(c.primary, c.track),
            borderWidth: 0,
            borderRadius: [20, 0],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '82%',
        events: [],
        animation: { animateRotate: true },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          centerText: {
            label: 'RadialBar',
            value: `${value}%`,
            labelColor: c.primary,
            labelSize: 16,
            valueSize: 15,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="radialbar" style={{ position: 'relative', height: 360 }}>
        <Doughnut data={this.state.data} options={this.state.options} plugins={plugins} />
      </div>
    );
  }
}

export default RadialBar;
