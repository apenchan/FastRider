import React from 'react';
import IconOne from './images/ico-01.svg';
import IconTwo from './images/ico-02.svg';
import IconThree from './images/ico-03.svg';
import SubmitPin from './SubmitPin';
import RidesList from './RidesList';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      rides: []
    } 
  }
  componentWillMount(){
    let currentComponent = this;
      let rides = `http://fast-rider.herokuapp.com/api/v1/rides?token=aee10c099086987f0588b0b977337aa3df0804edaa`
      axios.get(rides)
        .then(response => {
          console.log(response.data)
          currentComponent.setState({
            rides: response.data
          })
          return rides;
        }).catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">The Jungle Fast Rider</h1>
        <table className="display-instructions">
        <tbody>
          <tr>
            <th>
              <img src={IconOne} className="header-img" />
            </th>
            <th>
              <img src={IconTwo} className="header-img" />
            </th>
            <th>
              <img src={IconThree} className="header-img" />
            </th>
          </tr>
          <tr>
            <td className="img-instructions">Enter your park ticket #PIN number, then select the desired ride while notin the stated return time</td>
            <td className="img-instructions">Press 'submit' to conform and retrieve your access code</td>
            <td className="img-instructions">When the time comes, use the special FastRider line to cut out a considerable wait time</td>
          </tr>
          </tbody>
        </table>
        <div className="second-container">
        <SubmitPin />
        <RidesList rides={this.state.rides} />
        </div>
      </div>
    )
  }
}

export default HomePage;