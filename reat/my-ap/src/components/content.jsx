import React, { Component } from "react";
import climbing from "../images/pexels-lachlan-ross-7084334.jpg";
import diving from "../images/pexels-dunyalidagceylani-8398710.jpg";
import Alaska from "../images/pexels-spencer-gurley-1448055 (2).jpg";
import Perseon from "../images/man-1246508_1920.jpg"
import safari from "../images/pic-1.png";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content-container">
        <div className="content">
          <h1 className="second-section-header">Find Yourself</h1>

          <div className="project-images">
            <div className="image-content1">
              <h2 className="climbing">Climb</h2>
              <img src={climbing} alt="climbing" />
              <p>
                {" "}
                Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
                Porro accusantium <br /> dicta incidunt cum.
              </p>
              <div className="climbing-link">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="image-content2">
              <h2 className="safari">Safari</h2>
              <img src={safari} alt="climbing" />
              <p>
                {" "}
                Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
                Porro accusantium <br /> dicta incidunt cum.
              </p>
              <div className="safari-link">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="image-content3">
              <h2 className="skydiving">Skydiving</h2>
              <img src={diving} alt="climbing" />
              <p>
                {" "}
                Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
                Porro accusantium <br /> dicta incidunt cum.
              </p>
              <div className="diving-link">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <h1 className="third-section-header">New Places</h1>

          <div className="places-box">
            <div className="destination-img">
              <img src={Alaska} alt="" className="img" />
              <div className="dot">
                <div className="spinner-grow text-light" role= 'status'>

                </div>
{/* <i class="fas fa-spinner    "></i> */}
              </div>
            </div>
            <div className="about-destination">
              <div className="date">Aug 22, 2020</div>
              <h2 className="destination-name">Alaska</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                laudantium harum. Accusantium, nulla.
              </p>
              <div className="readmore">
                <a href="#">Read more</a>
              </div>
              <div className="destination-slidebtn">
                <div className="slidebtn-left">
                  <i className="fas fa-long-arrow-alt-left    "></i>
                </div>
                <div className="slidebtn-right">
                  <i className="fas fa-long-arrow-alt-right    "></i>
                </div>
              </div>
            </div>
          </div>

<div className="fourthSection">
  <div className="mobile">
    
  </div>
  <div className="aboutperson">
    <div className="image">
<img src={Perseon} alt="person" />
    </div>
    <div className="person-name">Blake Crawford</div>
    <div className="job-description">Traveler</div>
    <h1 className="number">+731</h1>
    <p className="description-text">
.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quisquam aliquid hic provident iste eaque iusto debitis quos, corrupti omnis. Libero.
    </p>
    <div className="followme-discover">
      <div className="follow">FOLLOW ME</div>
      <div className="discover">DISCOVER</div>
    </div>
  </div>
</div>

        </div>
      </div>
    );
  }
}

export default Content;
