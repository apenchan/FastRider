import React from 'react';
import IconOne from './images/ico-01.svg';
import IconTwo from './images/ico-02.svg';
import IconThree from './images/ico-03.svg';

class DisplayInstructions extends React.Component{
  render(){
    return(
      <div class="container display-instructions">
      <div class="row">
      <img src={IconOne} className="header-img" />
        <div className="col-sm img-instructions">
        Enter your park ticket #PIN number, then select the desired ride while notin the stated return time
        </div>
        </div>
        <div class="row">
        <img src={IconTwo} className="header-img" />
        <div class="col-sm img-instructions">
        Press 'submit' to conform and retrieve your access code
        </div>
        </div>
        <div class="row">
           <img src={IconThree} className="header-img" />
        <div class="col-sm img-instructions">
        When the time comes, use the special FastRider line to cut out a considerable wait time
        </div>
        </div>
    </div>
    )
  }
}

export default DisplayInstructions;