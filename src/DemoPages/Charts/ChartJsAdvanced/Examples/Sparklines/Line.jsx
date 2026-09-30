import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import { chartColors, sparklineOptions } from '../../../../../config/chartTheme';

class Line extends Component {
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
            borderColor: c.primary,
            backgroundColor: c.primary,
            tension: 0.4,
          },
        ],
      },
      options: sparklineOptions(),
    };
  }

  render() {
    return (
      <div className="line" style={{ position: 'relative', height: 200 }}>
        <LineChart data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Line;
