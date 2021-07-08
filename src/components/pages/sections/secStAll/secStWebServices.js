import React from 'react';

const SecStWebServices = () => {
    const data={
        img1:"https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/LIVE-STREAMING-PROJECT-5.png?w=555&ssl=1",
        img2:"https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Customer-Relationship-Management-5.png?w=555&ssl=1",
        img3:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/E-COMMERCE-APPLICATION-5.png?resize=300%2C300&ssl=1",
        img4:"https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/INTERNAL-PORTAL-WEB-APPLICATION-5.png?resize=300%2C300&ssl=1",
    }
    return (
        <div>
            <div className='row pl-5'>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img1}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
             MIGRATION OF OWB TO INFORMATICA<br/>BI Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img2}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              ORDER MANAGEMENT ANALYTICS<br/>Enterprise IT
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img3}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              IMPLEMENTATION OF SCM BI APPS<br/>Enterprise IT
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img4}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
              LIVE STREAMING PROJECT <br/>Web Services
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
    );
}

export default SecStWebServices;
