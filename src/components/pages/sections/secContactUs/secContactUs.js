import React from "react";
import './secContactUs.css'
const SecContactUs = () => {
  const data = {
    head: "Thank you for your interest in Our Services.SSSBI delivers measurable business value through business transformation.",
    title: "Get In Touch",
    desc:
      "Interested in learning more about our services? Our Professional Executives take the time to discuss your existing background program and help you make smart decisions that best meet your needs.Interested in learning more about our services? Our Professional Executives take the time to discuss your existing background program and help you make smart decisions that best meet your needs.",
  };
  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center">
            <strong className="fs-25">{data.title}</strong>
          </div>
      <div className="row pt-3">
        <div className="col-12- col-sm-12 col-md-6 col-lg-6">
          
          <div className="row pt-3">
            <p className='fs-14'>{data.head}</p>
          </div>
          <div className="row pt-2">
            <p className="fs-14">{data.desc}</p>
          </div>
        </div>
        <div className="col-12- col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h6 className="wpcf7-form-control-wrap text-141">
                <input
                  type="text"
                  name="text-141"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required fminput fs-14 fw-700"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Name*"
                  style={{ height: "50px" }}
                />
              </h6>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h6 className="wpcf7-form-control-wrap text-141">
                <input
                  type="email"
                  name="text-141"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required fminput fs-14 fw-700"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Email*"
                  style={{ height: "50px" }}
                />
              </h6>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <h6 className="wpcf7-form-control-wrap textarea-200 ">
                <textarea
                  name="textarea-200"
                  cols="20"
                  rows="4"
                  className="wpcf7-form-control wpcf7-textarea fminput fs-14 fw-700"
                  aria-invalid="false"
                  placeholder="Message"
                  style={{ width: "100%" }}
                ></textarea>
              </h6>
            </div>
          </div>
          <div className="row pt-1 pl-3">
            <button
              type="button"
              className="btn btn"
              style={{ height: "40px", width: "150px" ,backgroundColor:"#1c3b9c"}}
            >
              <h3 className='fs-18 p-1' style={{color:'#fff'}}>Submit Now</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecContactUs;
