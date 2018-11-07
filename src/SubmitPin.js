import React from 'react';
import axios from 'axios';
import RideBox from './RideBox';

class SubmitPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     PIN: '',
     rideId: 0,
     token: 'aee10c099086987f0588b0b977337aa3df0804edaa',
     rideSelected: false

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getRideId = this.getRideId.bind(this)
    this.getDate = this.getDate.bind(this)
  }
  displayRides(){
    return this.props.rides.map((params, index)=><RideBox key={index} {...params} rideId={this.state.rideId} getDate={this.getDate} getRideId={this.getRideId}/>)
  }
  changeColor(){
    let rideSelected = this.state.rideSelected
    this.setState({
      rideSelected: true
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(e.target.value)
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://fast-rider.herokuapp.com/api/v1/tickets", {
      pin: this.state.PIN,
      ride_id: this.state.rideId,
      token: this.state.token
    })
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log('Error fetching and parsing data', error.response);
      });
  }
  getRideId(e){
    this.changeColor()
    console.log(e.currentTarget.value)
    this.setState({
      rideId: e.currentTarget.value
    })
  }
  getDate(date){
    console.log("I am the date given", date)
    var d = new Date(date);
    let convertedTime = ((d.getUTCHours()) +( d.getUTCMinutes()) + (d.getUTCSeconds()))
    console.log(d.getUTCHours()); // Hours
    console.log(d.getUTCMinutes());
    console.log(d.getUTCSeconds());
    console.log("I am concerted Time!", convertedTime)
    // let date = d;
    return d.getUTCHours() + d.getUTCMinutes() + d.getUTCSeconds()
  }
  render(){
    console.log(this.state)
    return(
      <div>
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input className="input" type="text" placeholder="PIN#" id="PIN" value={this.state.PIN} onChange={this.handleChange}/>
          <button className="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="main-ride-container">
        {this.displayRides()}
      </div>
      </div>
    )
  }
}

export default SubmitPin;