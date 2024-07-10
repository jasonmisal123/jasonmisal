import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import portfolio from "../images/sound.jpg";
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
            <h2> Hello! I am an Aspiring Future Web Developer </h2>
        </div>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-6">
            <p className="del mt-5">
           Welcome to my personal website! With a solid foundation in web development,
           I am currently working towards a Bachelor's degree in Information Technology at Central Philippines State University.
           I have a keen interest in problem-solving and innovation. As a web developer,
           I am enthusiastic about applying my skills in a dynamic IT setting and making
            significant contributions to impactful tech projects.
            </p>
          </div>
          <div className="col-6 ">
            <div className="project-images">
              <img
                src={portfolio}
                style={{ width: '50%' , height: '22.5rem',}}
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
                <Row lg={3} xs={1} className="g-3">
                    <Col>
                        <div>
                            <div className="project-images">
                            <img
                                src={html}
                                className="transform-img float-end img-fluid "
                                alt=""
                            />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="reach">
                            <img
                                src={react}
                                className="transform-img float-end img-fluid "
                                alt=""
                            />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="project-images">
                            <img
                                src={xampp}
                                className="transform-img float-end img-fluid "
                                alt=""
                            />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="project-images">
                            <img
                                src={css}
                                className="transform-img float-end img-fluid "
                                alt=""
                            />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="project-images">
                            <img
                                src={bootstrap}
                                className="transform-img float-end img-fluid "
                                alt=""
                            />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
          <div className="col-6">
            <h5>Want to hire me as a tutor?</h5>
          <p>Just visit my contact information provided for the inquires and other matters related to work.</p>
          <h6>Social Links</h6>
          <ul>
           <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Facebook</b></p></a>
           </ul>
           <ul>
          <a href="https://mail:limacomisal@gmail.com" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Gmail</b></p></a>
          </ul>
          <ul>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Instragram</b></p></a>
          </ul>
          <ul>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  Tiktok</b></p></a>
          </ul>
          <ul>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"> <p className="bi bi-arrow-right text-black"><b>  github</b></p></a>
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
