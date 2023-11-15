import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options2: {
                chart: {
                    id: 'apexchart-example-3'
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            },
            series2: [{
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }],
        }
    }

    render() {

        return (
            <div className="bar">
                <Chart options={this.state.options2} series={this.state.series2} type="bar" width="100%" />
            </div>
        );
    }
}

export default Bar;
