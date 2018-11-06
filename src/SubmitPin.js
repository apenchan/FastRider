import React from 'react';
import axios from 'axios';

class SubmitPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     pin: '',
     ride_id: 0,
     token: 'aee10c099086987f0588b0b977337aa3df0804edaa'

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
      pin: this.state.pin,
      ride_id: this.state.ride_id,
      token: this.state.token
    })
      .then(response => {
        console.log(response.data)
        // this.setState({
        //   pin: response.data
        // })
        // return pin;
      }).catch(error => {
        console.log('Error fetching and parsing data', error.response);
      });
  }
  render(){
    return(
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input className="input" type="text" placeholder="PIN #" id="PIN" value={this.state.PIN} onBlur={this.handleChange}/>
          <button className="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitPin;