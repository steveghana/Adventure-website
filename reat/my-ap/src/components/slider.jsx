import React, { Component } from "react";
import image1 from "../images/pexels-andy-vu-3217911 (2).jpg";
import image2 from "../images/pexels-russ-jani-739657 (3).jpg";
import image3 from "../images/pexels-jess-vide-4321093.jpg";
class Slider extends Component {
  render() {
    return (
      <div className="slide-container">
        <div className="social-icons">
          <div className="instagram">
            <i class="fab fa-instagram    "></i>
          </div>
          <div className="twitter">
            <i class="fab fa-twitter    "></i>
          </div>
          <div className="linkedin">
            <i class="fab fa-linkedin    "></i>
          </div>
        </div>
        <div className="text">
          <div className="textheader">
            <span className="head"></span>
            <span className="lighter"></span>
            <div className="apollo"></div>
          </div>
          <p className="subtext">
            We believe adventure has no bounds, no definition - Its a frame of
            mind, a spirit, a choice
          </p>
        </div>
        <div className="container">
          <div className="numcontainer">
            <div className="number"></div>
            <div className="numApollo"></div>
          </div>
          <div className="slide">
            <div className="slidecontent slider box1">
              <div className="img">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="slidecontent slider box2">
              <div className="img">
                <img src={image2} alt="" />
              </div>
            </div>

            <div className="slidecontent slider box3">
              <div className="img">
                <img src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide-btns">
          <div className="btn1"><div className="btnapollo"></div>
          <div className="btn1hover"></div>
            <i className="fas fa-long-arrow-alt-left    "></i>
          </div>
          <div className="btn2">
          <div className="btn2hover"></div>
            <i className="fas fa-long-arrow-alt-right    "></i>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let slidecontainer = document.querySelector(".slide");
    let individualslide = document.querySelectorAll(".slider");
    sllde(slidecontainer, individualslide);
  }
}
function sllde(container, slide) {
  const adventure = {
      head: "Discover",
      light: "your adventure",
      id: "01",
      color: "#C9B4A3",
      blur:'#E9E1CC'
    },
    diving = {
      head: "The",
      light: "Skydiving rush",
      id: "02",
      color: "#FDD365",
      blur:' #F7E7C2'
    },
    surfing = {
      head: "Surf",
      light: `your perfect wave`,
      id: "03",
      color: "#83D0E2",
      blur:'#2BB8E3'
    };
  let numSlides = slide.length;
  let sldewidth = slide[0].offsetWidth;
  let headerBold = document.querySelector(".head");
  let headerLight = document.querySelector(".lighter");
  let number = document.querySelector(".number");
  let textcontainer = document.querySelector(".textheader");
  let xdirection = sldewidth;
  let Dynamicbackground = document.querySelector(".changingbackground");
  const firstClone = slide[0].cloneNode(true);
  const lastClone = slide[slide.length - 1].cloneNode(true);
  firstClone.setAttribute("id", "first-clone");
  lastClone.setAttribute("id", "second-clone");
  container.appendChild(firstClone);
  container.prepend(lastClone);
  let allSlides = document.querySelectorAll(".slider");
  let steps = 1;
  container.style.transform = `translateX(${-xdirection}px)`;
  text(adventure, headerBold, Dynamicbackground, number, headerLight);

  let { apollo, numApollo } = slidebtns();

  container.addEventListener("transitionend", () => {
    if (allSlides[steps].id === "first-clone") {
      container.style.transition = `none`;
      steps = 1;
      container.style.transform = `translateX(${-xdirection * steps}px)`;
      textcontent(adventure,headerBold,Dynamicbackground,number,headerLight);
    }

    if (allSlides[steps].id === "second-clone") {
      container.style.transition = `none`;

      steps = numSlides;
      container.style.transform = `translateX(${-xdirection * steps}px)`;
      textcontent(surfing, headerBold, Dynamicbackground, number, headerLight);
    }
    textpipeline();
  });

  window.addEventListener("resize", () => {
    sldewidth = slide[0].offsetWidth;
    xdirection = sldewidth;
    container.style.transition = "none";
    container.style.transform = `translateX(${-(xdirection * steps)}px)`;
  });

  function textpipeline() {
    slideTextContent(
      adventure,
      headerBold,
      Dynamicbackground,
      number,
      headerLight,
      "box1",
      allSlides,
      steps

    );
    slideTextContent(
      surfing,
      headerBold,
      Dynamicbackground,
      number,
      headerLight,
      "box3",
      allSlides,
      steps

    );
    slideTextContent(
      diving,
      headerBold,
      Dynamicbackground,
      number,
      headerLight,
      "box2",
      allSlides,
      steps

    );
  }

  function slidebtns() {
    let leftbtn = document.querySelector(".btn1");
    let rightbtn = document.querySelector(".btn2");
    let apollo = document.querySelector(".apollo");
    let numApollo = document.querySelector(".numApollo");

    leftbtn.addEventListener("click", () => {
      steps--;
      btnClasses();
      container.style.transform = `translateX(${-xdirection * steps}px)`;
      container.style.transition = `transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1)`;
      if (steps < 0) steps = 0;
    });
    rightbtn.addEventListener("click", () => {
      steps++;
      btnClasses();
      container.style.transform = `translateX(${-xdirection * steps}px)`;
      container.style.transition = `transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1)`;
      if (steps > allSlides.length) steps = allSlides.length;
    });
    return { apollo, numApollo };
  }

  function btnClasses() {
    textcontainer.classList.add("blurout");
    textcontainer.classList.remove("visible");
    number.classList.add("blurout");
    number.classList.remove("visible");
    apollo.classList.remove("move");
    numApollo.classList.remove("move");
  }
}


function slideTextContent(
  projectname,
  boldheader,
  background,
  number,
  lighthead,
  class_,
  allSlides, 
  steps
) {
  let apollo = document.querySelector(".apollo");
  let numApollo = document.querySelector(".numApollo");
  let textcontainer = document.querySelector(".textheader");
  if (allSlides[steps].classList.contains(class_)) {
    textcontent(projectname, boldheader, background, number, lighthead);
    classes(textcontainer, number, numApollo, apollo );
  }
}



function textcontent(name, bold, background, number, light) {
 return text(name, bold, background, number, light);
  
}



function classes(textcontainer, number, numApollo,apollo) {
  textcontainer.classList.remove("blurout");
  textcontainer.classList.add("visible");
  number.classList.remove("blurout");
  number.classList.add("visible");
  numApollo.classList.add("move");

  apollo.classList.add("move");
}



function text(name, bold, background, number, light) {
  let btn1hover = document.querySelector('.btn1hover')
  let btn2hover = document.querySelector('.btn2hover')
let leftblur = document.querySelector('.leftblur')
let rightblur = document.querySelector('.rightblur')
  bold.textContent = name.head;
  number.textContent = name.id;
  background.style.backgroundColor = name.color;
  light.textContent = name.light;
  btn1hover.style.backgroundColor = name.color
  btn2hover.style.backgroundColor = name.color
  leftblur.style.backgroundColor = name.blur
  rightblur.style.backgroundColor = name.blur

}




export default Slider;
