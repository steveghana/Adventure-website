import React, { Component } from 'react';
import Maincontent from './mainsection';
class Dynamicbackground extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div className="changingbackground">
                  
                <Maincontent/>
              </div>
              <div className="changing"></div>
            </React.Fragment>
        );
    }
}
 
export default Dynamicbackground;