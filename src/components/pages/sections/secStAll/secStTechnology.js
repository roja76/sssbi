import React from 'react';

const SecStTechnology = () => {
    const data={
        img1:"https://i2.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Biometric-Finger-Print-4.png?resize=150%2C150&ssl=1"
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
        </div>
        </div>
    );
}

export default SecStTechnology;
