import React from "react";
import "./secImages.css";
const SecImagesDigitalMarketing = () => {
  const data = {
    img1:
      "./assets/images/digital-marketing/001.png",
    img2:
      "./assets/images/digital-marketing/002.png",
    img3:
      "./assets/images/digital-marketing/003.png",
    img4:
      "./assets/images/digital-marketing/004.png",
    img5:
      "./assets/images/digital-marketing/005.png",
    img6:
      "./assets/images/digital-marketing/006.jpg",
    img7:
      "./assets/images/digital-marketing/007.png",
    img8:
      "./assets/images/digital-marketing/008.jpg",
  };;
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
              LEAD GENERATION<br/>Digital Marketing
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
                MY ECOMMERCE<br/>Digital Marketing, Web Development
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
                MADE IN GOSHALA<br/>Digital Marketing, Web Development
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
                VEDIC ORGANIC<br/>Digital Marketing, Web Development
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
                LIONS CLUB<br/>Digital Marketing, Web Development
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
              ACU CARE<br/>Digital Marketing, Web & Digital
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
              DIKSHA SEA-CAREER DEVELOPMENT CENTER<br/>Digital Marketing, Web & Digital
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
              NATURAL HEALING ACUPUNTURE<br/>Digital Marketing, Web & Digital
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SecImagesDigitalMarketing;
