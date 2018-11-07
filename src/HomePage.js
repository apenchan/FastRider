import React from 'react';
// import DisplayInstructions from './DisplayInstructions';
import SubmitPin from './SubmitPin';
import RidesList from './RidesList';
import axios from 'axios';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rides: []
		}
	}
	componentWillMount() {
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
				<h1 className="main-title">The Jungle FastRider</h1>
				{/* <div><DisplayInstructions/></div> */}
				<div className="second-container">
					<SubmitPin rides={this.state.rides} />
				</div>
			</div>
		)
	}
}

export default HomePage;