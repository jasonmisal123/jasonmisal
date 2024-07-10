import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import webicodehelp from "../images/pass.png";
import rfid from "../images/pucture.jpg";
import "./Style.css";

function Project() {
  return (
    <Container className="px-5 mx-4">
      <h1 className="project">Project</h1>
      <h5 className="mt-3">Below are some of the key projects I have contributed to</h5>
       <hr></hr>
      <Row className="gap-2">
        <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
        <div className="p-5 position-absolute top-25 start-25">
        <button className="text-white fw-bold btn btn-outline-success btn btn-dark">
        <a href="https://jasonmisal123.github.io/limaco.github.io/" className="text-white" style={{ textDecoration: 'none' }}>
      Sample Website
        </a>
      </button>
      </div>

          <div className="p-1 text-white">
            <b>This sample website contains a collection of mobile legend map.</b>
          </div>
          <div className="project-image">
            <img
              src={webicodehelp}
              className="transform-image float-end p-5"
              alt="Haircut Styling"
            />
          </div>
        </Col>

        <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
          <div className="p-4 position-absolute top-25 start-25">
            <button className="mt-3 text-white fw-bold btn btn-outline-success btn btn-dark">
              CPSU EVENTS
            </button>
          </div>
          <div className="p-1 text-white">
            <b>
            This system CPSU EVENTS was our capstone project. We developed this
            system to automate the manual process of EVENTS in the University.
            </b>
          </div>
          <div className="project-image">
            <img
              src={rfid}
              className="transform-image float-end p-5"
              alt=""
            />
          </div>
        </Col>
        {/* <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
          <div className="p-5 position-absolute top-25 start-25">
            <h3 className="text-white fw-bold btn btn-outline-success btn btn-dark">
              <i>Personal Portfolio</i>
            </h3>
          </div>
          <div className="project-image">
            <img
              src={portfolio}
              className="transform-image float-end p-5"
              alt=""
            />
          </div>
        </Col> */}
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
              <hr></hr>
    </Container>
  );
}

export default Project;
