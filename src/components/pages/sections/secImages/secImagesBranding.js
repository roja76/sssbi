import React from "react";
import "./secImages.css";
const SecImagesBranding = () => {
  const data = {
    img1:
      "./assets/images/branding/001.jpg",
    img2:
      "./assets/images/branding/002.jpg",
    img3:
      "./assets/images/branding/003.jpg",
    img4:
      "./assets/images/branding/004.jpg",
    img5:
      "./assets/images/branding/005.jpg",
    img6:
      "./assets/images/branding/006.jpg",
    img7:
      "./assets/images/branding/007.jpg",
    img8:
      "./assets/images/branding/008.jpg",
    img9:
      "./assets/images/branding/009.jpg",
  };
  return (
    <div className="container p-5">
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img1}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              BUSINESS CARDS<br/>Branding, Print
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img2}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
                CREATIVE DESIGNS<br/>Branding, Print
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img3}
            style={{ height: "238px", width: "238px" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
                INFOGRAPHICS<br/>Branding, Print
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img4}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              ERD<br/>Branding
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img5}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
                LISTEN TO YOUR CONSCIOUS<br/>Branding
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img6}
            style={{ height: "238px", width: "238px" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              E-CART<br/>Branding
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img7}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
                MAA HOSPITAL<br/>Branding
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img8}
            style={{ height: "300px", width: "100%" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
                EDA<br/>Branding
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img9}
            style={{ height: "238px", width: "238px" }}
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              CES<br/>Branding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecImagesBranding;
