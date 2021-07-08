import React from "react";
import { SecAll, SecBiSolutions, SecHr, SecWebInterFace } from "..";
import "./secServicePage.css";
const SecServicepage = () => {
  return (
    <div className="container-fluid ">
      <div className="  service pl-5  justify-content-center">
        <ul className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
          <li className="nav-item col-12 col-md-3 ">
            <button
              className="light  nav-link active fs-14 mt-3 mb-3 bttn ml-4"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              style={{ borderRadius: "30px", border: "none",height:'40px',width:'70%' }}
            >
              <p>All</p>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3" >
            <button
              className="light  nav-link fs-14 mt-3 mb-3"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              style={{ borderRadius: "30px", border: "none",height:'40px',width:'70%' }}
            >
              <p>BI Solutions</p>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 ">
            <button
              className="light  nav-link fs-14 mt-3 mb-3"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              style={{ borderRadius: "30px", border: "none",height:'40px',width:'70%' }}
            >
              <p>Web Interface</p>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 ">
            <button
              className="light  nav-link fs-14 mt-3 mb-3"
              id="pills-hr-tab"
              data-toggle="pill"
              href="#pills-hr"
              role="tab"
              aria-controls="pills-hr"
              aria-selected="false"
              style={{ borderRadius: "30px", border: "none",height:'40px',width:'70%' }}
            >
              <span>Human Resources</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <SecAll />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
         <SecBiSolutions/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
         <SecWebInterFace/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-hr"
          role="tabpanel"
          aria-labelledby="pills-hr-tab"
        >
          <SecHr/>
        </div>
      </div>
    </div>
  );
};

export default SecServicepage;
