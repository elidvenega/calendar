import React, { Component } from 'react';
import Clock from 'react-live-clock';

export class Time extends Component {
  render() {
    return (
        <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Pacific'} />
    )
  }
}

export default Time;
