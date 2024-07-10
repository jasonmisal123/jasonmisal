import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sortingImage from "../images/jason1.jpg";
import troubleImage from "../images/misal2.jpg";
import incodeImage from "../images/jarom4.jpg";
import ncodeImage from "../images/jerold3.jpg";

function Experience() {
  return (
    <div className="container px-5 mx-4">
      <h1 className="abouts">Experience</h1>
      <hr />
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">DPWH, Kabankalan City</h5>
              <img
                src={sortingImage}
                style={{ width: '100%' , height: '22.5rem' }}
                className="img-fluid border rounded-4 transform-image"
                alt="Sorting"
              />
              <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed troubleshooting</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">DPWH, Kabankalan City</h5>
              <img
                src={ncodeImage}
                style={{ width: '100%', height: '22.5rem' }}
                className="img-fluid border rounded-4 transform-image"
                alt="Ncode"
              />
              <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed troubleshooting</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">DPWH, Kabankalan City </h5>
              <img
                src={troubleImage}
                style={{ width: '100%', height: '22.5rem' }}
                className="img-fluid border rounded-4 transform-image"
                alt="Trouble"
              />
               <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed troubleshooting</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
  <div className="card">
    <div className="card-body">
      <h2>Internship</h2>
      <h5 className="card-title">DPWH, Kabankalan City</h5>
      <img
        src={incodeImage}
        style={{ width: '100%', height: '22.5rem' }}
        className="img-fluid border rounded-4 transform-image"
        alt="Incode"
      />
      <div className="text-center">
        <button className="btn btn-light mt-1">Performed troubleshooting</button>
      </div>
    </div>
  </div>
</div>

      </div>

      <hr />
      <br />
    </div>
  );
}

export default Experience;
