import React from "react";
import "./secImages.css";
const SecImagesAll = () => {
  const data = {
    img1:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2019/03/lead_generation.png?resize=100%2C100&ssl=1",
    img2:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2019/03/hitech_mobile.jpg?resize=100%2C100&ssl=1",
    img3:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2019/03/2gobazaar.jpg?resize=300%2C300&ssl=1",
    img4:
      "https://i1.wp.com/www.sssbi.com/wp-content/uploads/2019/03/E-commerce.png?resize=150%2C150&ssl=1",
    img5:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2019/03/goshala.png?resize=100%2C100&ssl=1",
    img6:
      "https://i0.wp.com/www.sssbi.com/wp-content/uploads/2019/03/Ravi_Nuero.png?resize=150%2C150&ssl=1",
    img7:
      "https://i1.wp.com/www.sssbi.com/wp-content/uploads/2019/03/vedic_organic.png?resize=150%2C150&ssl=1",
    img8:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2019/03/LionsClub.png?resize=150%2C150&ssl=1",
    img9:
      "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/002.jpg?w=500&ssl=1",
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
              Lead Generation<br/> Digital Marketing
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
                HI-TECH MOBILE<br/>Mobile APP
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
                2GOBAZAAR <br/>Mobile APP
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
                  MY ECOMMERCE <br/>Digital Marketing, Web Development
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
                  MADE IN GOSHALA <br/> Digital Marketing, Web Development
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
               RAVI NUERO HOSPITAL <br/>Web Development
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
                  VEDIC ORGANIC<br/>Digital Marketing, Web Development
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
              LIONS CLUB<br/>Digital Marketing, Web Development
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom"
            src={data.img9}
            height= "238px" width= "238px"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
               CREATIVE DESIGNS<br/>Branding, Print
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecImagesAll;
