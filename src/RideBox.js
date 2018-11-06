import React from 'react';

class RideBox extends React.Component{
  render(){
    return(
      <button className="ride-description" style={{
      border: '4px solid #373737',
      borderTopColor: this.props.zone.color}} id={this.props.id} value={this.props.id} onClick={this.props.getRideId}><div className="ride-zone">{this.props.zone.name}</div><div className="ride-name" value={this.props.id} onClick={this.props.getRideId} id={this.props.id}> {this.props.name} </div>{this.props.remaining_tickets}</button>
    )
  }
}

export default RideBox;