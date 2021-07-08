import React from 'react';
import { SecImagesAll, SecImagesBranding, SecImagesMobileApp, SecImagesWebDevelopement } from '..';
import SecImagesDigitalMarketing from '../secImages/secImagesDigitalMarketing';
import './secWebtabs.css'
const SecWebTabs = () => {
    return (
        <div className="container-fluid">
      <div className=" d-flex justify-content-center web" >
        <ul className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
          <li className="nav-item col-12 col-md-3 p-3">
            <button
              className="light  nav-link active fs-16  d-flex justify-content-center"
              id="pills-all-tab"
              data-toggle="pill"
              href="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
              style={{  border: "none",height:'30px', width:"100%"}}
            >
              <span className='fs-13'>All</span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 p-3">
            <button
              className="light  nav-link  fs-16 ml-2 d-flex justify-content-center"
              id="pills-branding-tab"
              data-toggle="pill"
              href="#pills-branding"
              role="tab"
              aria-controls="pills-branding"
              aria-selected="true"
              style={{  border: "none",height:'30px', width:"100%" }}
            >
              <span className='fs-13'>Branding</span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 p-3" style={{ boxSizing: "20px" }}>
            <button
              className="light  nav-link fs-16 ml-2 d-flex justify-content-center"
              id="pills-digital-tab"
              data-toggle="pill"
              href="#pills-digital"
              role="tab"
              aria-controls="pills-digital"
              aria-selected="false"
              style={{  border: "none",height:'30px', width:"100%" }}
            >
              <span className='fs-13'>Digital Marketing</span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 p-3">
            <button
              className="light  nav-link fs-16 ml-2 d-flex justify-content-center "
              id="pills-mobile-tab"
              data-toggle="pill"
              href="#pills-mobile"
              role="tab"
              aria-controls="pills-mobile"
              aria-selected="false"
              style={{  border: "none",height:'30px', width:"100%" }}
            >
              <span className='fs-13'>Mobile App</span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-3 p-2 " >
            <button
              className="light  nav-link fs-16 ml-2 d-flex justify-content-center"
              id="pills-web-tab"
              data-toggle="pill"
              href="#pills-web"
              role="tab"
              aria-controls="pills-web"
              aria-selected="false"
              style={{  border: "none",height:'30px', width:"100%" }}
            >
              <span className='fs-13'>Web Developement</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-all"
          role="tabpanel"
          aria-labelledby="pills-all-tab"
        >
         <SecImagesAll/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-branding"
          role="tabpanel"
          aria-labelledby="pills-branding-tab"
        >
         <SecImagesBranding/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-digital"
          role="tabpanel"
          aria-labelledby="pills-digital-tab"
        >
         <SecImagesDigitalMarketing/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-mobile"
          role="tabpanel"
          aria-labelledby="pills-mobile-tab"
        >
        <SecImagesMobileApp/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-web"
          role="tabpanel"
          aria-labelledby="pills-web-tab"
        >
         <SecImagesWebDevelopement/>
        </div>
      </div>
    </div>
    );
}

export default SecWebTabs;
