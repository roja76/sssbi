import React from 'react';

const SecStEnterpriseMobility = () => {
    const data={
        img1:"https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Fraud-Insight-driven-analytics-5.png?resize=555%2C555&ssl=1",
        img2:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Oracle-ODI-BI-Apps-Implementation.png?w=555&ssl=1",
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
        </div>
        </div>
    );
}

export default SecStEnterpriseMobility;
