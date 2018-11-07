import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

class RideInfo extends React.Component{
  render(){
    console.log(this.state)
    const dateToFormat = this.props.rideInfo.return_time
    return (
      <div style={{
        border: '4px solid #373737',
        borderTopColor: this.props.rideInfo.ride.zone.color}}className="info-container">
        <div className="top-left">{this.props.rideInfo.ride.name}</div><div className="top-right">{this.props.rideInfo.ride.zone.name}</div>
        <div className="return-info"><div className="return-at">Return At</div><Moment>{dateToFormat}</Moment></div>
        <div className="access-info"><div className="access-code">Use Access Code</div>{this.props.rideInfo.access_code}</div>
      </div>
    )
  }
}

export default RideInfo;