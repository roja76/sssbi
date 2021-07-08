import React from 'react';

const StaffingServices = () => {
    const data = {
        desc:
          "Staff Augmentation - With our extensive experience, longevity global market scenario and network of connections we are able to provide a wide variety of need based result-oriented and innovative HR solutions to companies of all sizes.Our unique  Human Resource Solutions  help start-ups to fortune companies build their own HR team, while equipping them with the advice and systems to be successful and grow.",
          title1: "HR STAFFING",
          title2: "IT OUTSOURCING",
          title3: "STAFF AUGMENTATION",
          content1:
            "Attracting high calibre HR professionals who are aligned with your organization’s purpose and values can be a huge challenge. We specialize in providing the right person for the position. We believe thorough screening is important to find the most qualified candidates.",
          content3:
            "Our expertise, combined with our HR Solutions, improves your workforce performance, reduces liability and increases profits.",
          content2:
            "Leave the industry challenge to us. we work with clients to develop unique outsourcing to effectively one or more of your technology needs.",
          img1:
            "https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/HR-STAFFING.png?w=768&ssl=1",
          img2:
            "https://i1.wp.com/www.sssbi.com/wp-content/uploads/2018/01/IT-Outsourcing.png?w=768&ssl=1",
          img3:
            "https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/STAFF-AUGMENTATION.png?w=768&ssl=1",
      };
    return (
        <div className='container-fluid'>
            <strong className='fs-18 pl-3'>Staffing Services</strong>
            <div className="row">
        <div className="col-12 pl-5 pr-5 pt-3">
          <p className="fs-13 d-flex justify-conetnt-center">{data.desc}</p>
        </div>
      </div>
       <div className="row pt-3">
       <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-5">
          <div className=" d-flex justify-content-center">
            <h3 className="fs-18 fw-700 pt-3">{data.title1}</h3>
          </div>
          <div className=" d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 pl-5 ">
            <p className="fs-13 d-flex justift-content-center">
              {data.content1}
            </p></div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <img
            src={data.img1}
            className="img-fluid"
            style={{ height: "200px" }}
          />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className=" d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-5">
          
          <img
            src={data.img2}
            className="img-fluid pl-4"
            style={{ height: "200px" }}
          />
          </div>
          </div>
         
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-5">
          <div className="row pl-3 pt-5">
            <h3 className="fs-18 fw-700 pl-5" >{data.title2}</h3>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-4 ">
            <p className="fs-13" >
              {data.content2}
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-5 pt-2">
          <div className=" d-flex justify-content-center">
            <h3 className="fs-18 fw-700  pl-5 pt-3"style={{textAlign:'center'}}>{data.title3}</h3>
          </div>
          <div className=" d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-5 ">
            <p className="fs-13 d-flex justift-content-center">
              {data.content3}
            </p></div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <img
            src={data.img3}
            className="img-fluid pb-5"
            style={{ height: "200px" }}
          />
        </div>
      </div>
        </div>
    );
}

export default StaffingServices;
