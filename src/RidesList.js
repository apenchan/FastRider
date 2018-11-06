import React from 'react';
import RideBox from './RideBox';

class RidesList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      rideId: ""
    }
    this.getRideId = this.getRideId.bind(this)
  }
  getRideId(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    this.setState({
      rideId: e.target.value
    })
  }
  displayRides(){
    return this.props.rides.map((params, index)=><RideBox key={index} {...params} rideId={this.state.rideId}getRideId={this.getRideId}/>)
  }
  render(){
    return(
      <div className="main-ride-container">
        {this.displayRides()}
      </div>
    )
  }
}

export default RidesList;