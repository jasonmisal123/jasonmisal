/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import webicodehelp from "../images/output.png";
import rfid from "../images/picture.png";
import homeImage from "../images/deve.jpg";
import "./Style.css";

function Home() {
  return (
    <Container fluid id="home">
      <section className="px-5 mx-4">
        <Container className="box">
          <Row className="g-4 mb-5">
            <Col className="mx-4">
              <Card className="border-0 mb-4">
                <Card.Body className="mb-5">
                  <Card.Title className="mt-5">
                    <h3 className="h3">
                      <b>
                        Hello, I'm
                        <br />
                        Roberto R. Gillo
                      </b>
                    </h3>
                    <p className="text-muted fs-0 fw-light">
                      <b className="text-black fw-bold"></b> Bachelor of Science
                      in Information Technology <br></br>@Central Philippines
                      State University
                      <br /> Main Campus, Kabankalan City, Philippines
                      <br /> S.Y. 2023-2024
                    </p>
                    <p className="fw-light fs-4 mt-1 text-justify mb-4">
                      <br /> "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-1 mt-5">
              <Card className="border-0">
                <Card.Body className="">
                  <img
                    src={homeImage}
                    className="img-fluid w-80"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid id="projects">
          <div className="container pt-4 box">
            <Row>
              <Col>
                <h6 className="fs-10 bold-500 mt-auto">Recent Projects</h6>
              </Col>
              <Col className="d-flex justify-content-center align-items-center ">
                <a
                  href="./project"
                  className="btn bg-white btn-xl text-lg fs-5 py-3 px-5 shadow">
                  <i className="bi bi-arrow-up-right-square"></i><b> View All</b>
                </a>
              </Col>
            </Row>
            <Row className="gap-2">
              <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
                  <div className="p-4 position-absolute top-25 start-25">
                  <button className="text-white fw-bold btn btn-outline-success btn btn-dark">
                  <a href="https://robertogillo.github.io/gillo.github.io/" className="text-white" style={{ textDecoration: 'none' }}>
                 Sample Website
                 </a>
                  </button>
                  </div>
                  <div className="project-image">
                    <img
                      src={webicodehelp}
                      className="transform-image float-end p-5"
                      alt=""
                    />
                  </div>
              </Col>
              <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="p-4 position-absolute top-25 start-25">
                  <button className="text-white fw-bold btn btn-outline-success btn btn-dark">
                 CPSU Clinic Management System
                  </button>
                  </div>
                  <div className="project-image">
                    <img
                      src={rfid}
                      className="transform-image float-end p-5"
                      alt=""
                    />
                  </div>
                </a>
              </Col>
              {/* <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                  <button className="text-white fw-bold btn btn-outline-success btn btn-dark">
                  Personal portfolio
                  </button>
                  </div>
                  <div className="project-image">
                    <img
                      src={portfolio}
                      className="transform-image float-end p-5"
                      alt=""
                    />
                  </div>
                </a>
              </Col> */}
            </Row>
          </div>
        </Container>
      </section>
              <hr></hr>
    </Container>
  );
}

export default Home;
