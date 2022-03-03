import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Cars',
        'Trains',
        'Airplanes'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            '#cbd5dc',
            '#71deb9',
            '#ef869e'
        ],
        hoverBackgroundColor: [
            '#7097e1',
            '#4dd6a7',
            '#eb6886'
        ]
    }]
});


export default class DynamicDoughnutExample extends React.Component {
    constructor() {
      super();
      this.state = {
        data: {
          labels: ["Cars", "Trains", "Airplanes"],
          datasets: [
            {
              data: [
                getRandomInt(50, 200),
                getRandomInt(100, 150),
                getRandomInt(150, 250),
              ],
              backgroundColor: ["#cbd5dc", "#71deb9", "#ef869e"],
              hoverBackgroundColor: ["#7097e1", "#4dd6a7", "#eb6886"],
            },
          ],
        },
      };
    }
    render() {
      return (
        <div>
          <Doughnut data={this.state.data} width={667} height={270} options={{ maintainAspectRatio: false }}/>
        </div>
      );
    }
  }