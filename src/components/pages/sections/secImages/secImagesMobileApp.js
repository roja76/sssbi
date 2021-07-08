import React from "react";
import "./secImages.css";
const SecImagesMobileApp = () => {
  const data = {
    img1:
      "./assets/images/mobile-app/001.jpg",
    img2:
      "./assets/images/mobile-app/002.jpg",
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
              HI-TECH MOBILE<br/>Mobile APP
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
              2GOBAZAAR<br/>Mobile APP
              </p>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default SecImagesMobileApp;
