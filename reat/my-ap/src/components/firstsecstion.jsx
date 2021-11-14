import React, { Component } from 'react';
import Nav from './nav';
import Slider from './slider';
class Firstsection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="firstsection">
                 <Nav/>
                 <Slider/>
              
            </div>
         );
    }
}
 
export default Firstsection;