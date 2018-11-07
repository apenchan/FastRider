import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import IconTwo from './images/ico-02.svg';
import IconThree from './images/ico-03.svg';

class RideBox extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     bgColor: '#373737'
  //   }
  // }
  render() {
    console.log(this.props)
    const dateToFormat = this.props.return_time;
    return (
    <button style={{
        border: '4px solid #373737',
        borderTopColor: this.props.zone.color,
      }} value={this.props.zone.color} className="ride-description" type="button" id={this.props.id} onClick={this.props.getRideId}>
        <div className="ride-zone">{this.props.zone.name}</div>
        <div className="ride-name" value={this.props.id} onClick={this.props.getRideId} id={this.props.id}> {this.props.name} </div>
        <div className="ride-time"><img src={IconThree} className="ticket-img" />{this.props.getDate(dateToFormat)}</div>
        {/* <div className="ride-time"><Moment locale="il">{dateToFormat}</Moment></div> */}
        <div className="remaining-tickets"><img src={IconTwo} className="ticket-img" />{this.props.remaining_tickets}</div>
    </button>
    )
  }
}

export default RideBox;