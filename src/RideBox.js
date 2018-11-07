import React from 'react';

class RideBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rideSelected: false
  //   }
  //   this.changeColor = this.changeColor.bind(this)
  //   this.toggle = this.toggle.bind(this)
  //   this.displayColor = this.displayColor.bind(this)
  // }
  // changeColor(){
  //   let rideSelected = this.state.rideSelected
  //   this.setState({
  //     rideSelected: true
  //   })
  // }
  toggle(position) {
    let rideSelected = this.state.rideSelected
    if(this.state.rideSelected === position){
      this.setState({rideSelected: null})
    } else{
      this.setState({rideSelected: position})
    }
  }
  displayColor(position){
    console.log("clicked")
    let rideSelected = this.state.rideSelected
    if(this.state.rideSelected === position){
      return this.props.zone.color
    } 
    return '##373737'
  }
  render() {
    return (
      this.props.rideSelected == true ? 
      <button style={{
        backgroundColor: this.props.zone.color,
        color: this.props.zone.color
      }} className="ride-description" type="button" id={this.props.id} value={this.props.id} onClick={this.props.getRideId}>
        <div className="ride-zone">{this.props.zone.name}</div><div className="ride-name" value={this.props.id} onClick={this.props.getRideId} id={this.props.id}> {this.props.name} </div><div className="remaining-tickets">{this.props.remaining_tickets}</div></button> : <button style={{
        border: '4px solid #373737',
        borderTopColor: this.props.zone.color,
      }} className="ride-description" type="button" id={this.props.id} value={this.props.id} onClick={this.props.getRideId}>
        <div className="ride-zone">{this.props.zone.name}</div><div className="ride-name" value={this.props.id} onClick={this.props.getRideId} id={this.props.id}> {this.props.name} </div><div className="remaining-tickets">{this.props.remaining_tickets}</div></button>
    )
  }
}

export default RideBox;