import React, { Component } from 'react';
import Firstsection from './firstsecstion';
import Content from './content';
class Maincontent extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="mainsection">
                <Firstsection/>
            <Content />
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Maincontent;