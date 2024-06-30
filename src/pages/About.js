import React from "react";
import { Container } from "react-bootstrap";
import portfolio from "../images/lag.jpg";
import html from "../images/html.png";
import react from "../images/reacts.png";
import xampp from "../images/xamppp.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap-icons.png";
import "./Style.css";

function About() {
  return (
    <Container fluid id="about">
    <Container className="px-8 mx-5">
      <Container className="px-4">
        <div className="intro">
        <h1 className="abouts">About</h1>
            <h2> Hello! I am an aspiring future web developer </h2>
        </div>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-6">
            <p className="del mt-5">
            Welcome to my personal web page! I have a strong background in web development and 
            I'm currently pursuing a Bachelor's degree in Information Technology at Central Philippines State University. 
            I'm passionate about problem-solving 
            and discovering innovative solutions. As a web developer, 
             I’m eager to apply my skills in a dynamic IT environment and contribute to impactful projects in the tech world.
            </p>
          </div>
          <div className="col-6 ">
            <div className="project-images">
              <img
                src={portfolio}
                className="border rounded-4 transform-images float-end "
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <h5 className="mt-3">Do you want to know more about my skills? Here are some!</h5>
          <ul>
            <li><b>HTML & CSS:</b> Proficient in crafting well-structured, semantic HTML and styling with modern CSS techniques, including Flexbox and Grid</li>
            <li><b>JavaScript:</b> Experienced in using JavaScript to build interactive web applications, enhance user experience, and manipulate the DOM.</li>
            <li><b>PHP:</b> Skilled in server-side scripting with PHP to develop robust backend systems and manage database interactions</li>
            <li><b>Bootstrap:</b> Utilizing Bootstrap to quickly design and customize responsive websites with ease, ensuring compatibility across various devices and screen sizes.</li>
            <li><b>React.js:</b>  Proficient in building component-based user interfaces with React.js, leveraging its powerful features for state management and performance optimization</li>
          </ul>
          </div>
          <div className="col-6">
            <h5 className=" tech bg-dark text-light mt-3"><strong>Technology Stack</strong></h5>
            <div className="row">
            <div className="col-4">
              <div className="project-images">
              <img
                src={html}
                className="transform-imagess float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="reach">
              <img
                src={react}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={xampp}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={css}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={bootstrap}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            </div>
          </div>
          <div className="col-6">
            <h5>Want to hire me as a tutor?</h5>
          <p>Just visit my contact information provided for the inquires and other matters related to work.</p>
          <h6>Social Links</h6>
          <ul>
           <a href="https://web.facebook.com/roberto.r.gillo" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Facebook</b></p></a>
           </ul>
           <ul>
          <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Gmail</b></p></a>
          </ul>
          <ul>
          <a href="https://www.instagram.com/gillo.roberto/" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Instragram</b></p></a>
          </ul>
          <ul>
          <a href="https://www.tiktok.com/@roberto.gillo" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Tiktok</b></p></a>
          </ul>
          <ul>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  github</b></p></a>
          </ul>
          </div>
        </div>
        
        <br></br>

        <div className="container border-top"></div>
      </Container>
    </Container>
    </Container>
  );
}

export default About;
