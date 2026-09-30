import React, { Component, Fragment } from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsAdvancedBasic from './Examples/Basic/';
import ChartJsAdvancedSparklines from './Examples/Sparklines/';

export default class ChartJsAdvanced extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Chart.js Advanced"
          subheading="Zoomable area charts, progress rings, donuts and sparklines built with Chart.js."
          icon="pe-7s-graph2 icon-gradient bg-happy-green"
        />
        <ChartJsAdvancedBasic />
        <ChartJsAdvancedSparklines />
      </Fragment>
    );
  }
}
