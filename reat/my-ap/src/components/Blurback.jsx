import React, { Component } from "react";
import Dynamicbackground from "./changingback";

class Blurbackground extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blur">
          <div className="leftblur"></div>
          <div className="middle">
            <Dynamicbackground />
          </div>
          <div className="rightblur"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blurbackground;
