import React from 'react';

const SecStEnterpriseIt = () => {
    const data={
        img1:"https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Order-Management-Analytics.png?resize=300%2C300&ssl=1",
        img2:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Implementation-of-SCM-BI-Apps-3.png?w=555&ssl=1",
        img3:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Migration-of-ETL-Code-from-OWB-to-Informatica-2.png?w=555&ssl=1",
        img4:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/UPGRADATION-OF-BI-apps-795-TO-7964-5.png?resize=300%2C300&ssl=1",
        img5:"https://www.sssbi.com/wp-content/uploads/2018/01/Supply-chain-optimization-4.png",
        img6:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Data-Governance-and-Migration.png?w=555&ssl=1",
    }
    return (
        <div>
            <div className='row'>
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
          <div className='row'>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img5}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
             IMPLEMENTATION OF DWBI<br/>BI Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 hvrbox p-3">
          <img
            className="img-fluid hvrbox-layer_bottom imgwh"
            src={data.img6}
            
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <p className="d-flex jusity-content-center">
             CUSTOMER RELATIONSHIP MANAGEMENT<br/>Web Services
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
}

export default SecStEnterpriseIt;
