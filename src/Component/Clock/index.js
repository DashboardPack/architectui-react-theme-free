import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toString().split(' ')[4]
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toString().split(' ')[4]
      });
    }
    render() {
      return (this.state.time);
    }
  }