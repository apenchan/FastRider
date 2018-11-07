import React from 'react';
import axios from 'axios';
import RideBox from './RideBox';
import RideInfo from './RideInfo'; 

class SubmitPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     PIN: JSON.parse(localStorage.getItem('PIN'))||'',
     rideId: 0,
     token: 'aee10c099086987f0588b0b977337aa3df0804edaa',
     color: '',
     success: false,
     rideInfo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getRideId = this.getRideId.bind(this)
    this.getDate = this.getDate.bind(this)
  }
  displayRides(){
    return this.props.rides.map((params, index)=><RideBox key={index} {...params} rideId={this.state.rideId} getDate={this.getDate} highlightRide={this.state.hightlightRide} getRideId={this.getRideId}/>)
  }
  handleChange(e) {
    localStorage.setItem("PIN", JSON.stringify(e.target.value));
    localStorage.getItem('PIN');
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
        localStorage.setItem("PIN", JSON.stringify(this.state.PIN));
        localStorage.getItem('PIN');
        console.log(response.data)
        this.setState({
          success: true,
          rideInfo: response.data
        })
      }).catch(error => {
        console.log('Error fetching and parsing data', error.response);
      });
  }
  getRideId(e, color){
    console.log(e.currentTarget.value)
    this.setState({
      color: e.target.value,
      rideId: e.currentTarget.id
    })
  }
  getDate(date){
    console.log("I am the date given", date)
    var d = new Date(date);
    return (d.getUTCHours())+ d.getUTCMinutes()
  }
  render(){
    console.log(this.state)
    console.log(this.props.rides)
    if(this.state.success == true){
     return <RideInfo rideInfo={this.state.rideInfo}/>
    } else {
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
}

export default SubmitPin;