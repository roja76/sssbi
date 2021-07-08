import React from 'react';
import './services.css'

const SalesForce = () => {
    const data = {
        title1: "Transform your Business with Salesforce Consulting",
        title2:'Salesforce Development & Lifecycle Management',
        content1:
          "Salesforce, an integrated CRM and cloud computing platform, has become a very beneficial part of the most online businesses owing to its enhanced features and specifications that allow business take advantages over their rivals in a convenient manner. Today, Salesforce consulting services offered by experienced and professional IT companies can make a real difference to the growth of business enterprises of all sizes and types.",
        content2:
          "Cloud Computing is a smarter and eco-friendly way of doing business. It helps you reduce rising costs efficiently and provides Salesforce consulting services to guide your company to apply the best practices for application development and successful implementation. With our dedicated Salesforce consultants, direct access to Salesforce.com’s products and a skilled technology development team of experts is ensured.",
        content3:
          "SSS specializes in the architecture, implementation, customization, and integration of a broad suite of Salesforce services and solutions. We are true consultants who do not just implement software, but solve complex business problems for start ups to Fortune 500 enterprises. SSS team of technology veterans design Salesforce solutions rapidly—helping to expedite your path to new growth.",
          img1:'https://i2.wp.com/www.sssbi.com/wp-content/uploads/2020/01/salesforce.jpg?resize=1024%2C490&ssl=1',
          title3: "FORCE.COM DEVELOPMENT",
          title4:'WEB APPLICATION DEVELOPMENT',
          title5:'TESTING',
          title6:'DEVELOPMENT ASSISTANCE',
          title7:'DATA-RELATED ASSISTANCE',
          title8:'TRAINING',
          title9:"PROJECT MANAGEMENT ASSISTANCE",
          content4:
            "Includes development and implementation of code written in Apex and Visualforce",
            content5:'Includes development and implementation of code written in Lightning, HTML, CSS, JavaScript, and common JS frameworks.',
            content6:'Includes testing solutions from a UI perspective as well as writing unit tests required for the Force.com platform.',
            content7:'Includes configuring and developing custom and standard fields and objects and integration of custom applications.',
            content8:"Includes providing guidance around data exports to other systems, manipulating and cleansing data, and more",
            content9:"Provide train the trainer sessions to empower the client during various phases of the engagement to build knowledge",
            content10:'Support the successful delivery of services for the client (i.e. meeting prep, guidance on optimal design, daily scrums, and more)',
      };
    return (
        <div className="container-fluid pl-5">
        <div className="row p-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12 ">
            <h3 className="fs-18 fw-700 fw-700">{data.title1}</h3>
          </div>
        </div>
        <div className="row pl-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12  pr-5">
            <p className="fs-13">{data.content1}</p>
          </div>
        </div>
        <div className="row pl-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12  pr-5">
            <p className="fs-13">{data.content2}</p>
          </div>
        </div>
        <div className="row pl-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12  pr-5">
            <p className="fs-13">{data.content3}</p>
          </div>
        </div>
        <div className="row pl-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12  pr-5">
            <h3 className="fs-18 fw-700 fw-700">{data.title2}</h3>
          </div>
        </div>
        <div className="row pl-3 ">
          <div className="col-12 col-sm-12 co-md-12 col-lg-12  pr-5 p-5">
          <img className='img-fluid' src={data.img1}/>
          </div>
        </div>
        <div className="row pl-3 ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <div className="row pl-5  ">
            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center" >
                <span className=" fa fa-clipboard icon_clipboard fs-23 fw-700 p-2"  ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title3}</p>
              <p className="fs-13 ">{data.content4}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5">
        <div className="row pl-5 ">
            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className="  fa fa-user icon_clipboard  fs-25 pt-1 fw-700" ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title4}</p>
              <p className="fs-13 ">
                {data.content5}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-3 ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5 pt-5">
        <div className="row pl-5 ">
            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className="  fa fa-life-ring fs-25 fw-700 p-2 " ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title5}</p>
              <p className="fs-13 ">{data.content6}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5">
        <div className="row p-5  ">

            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className="  fa fa-handshake-o fs-25 fw-700 p-2" ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 pl-2">{data.title6}</p>
              <p className="fs-13 pl-2">
                {data.content7}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-3 ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5 pt-5">
        <div className="row pl-5 ">
            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className=" fa fa-life-ring fs-25 fw-700 p-2" ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title7}</p>
              <p className="fs-13 ">{data.content8}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5">
        <div className="row p-5  ">

            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className="  fa fa-thumbs-o-up  fs-25 fw-700 p-2" ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title8}</p>
              <p className="fs-13 ">
                {data.content9}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-3 ">
        
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pr-5">
        <div className="row p-5  ">

            <div className="col-1 pr-5">
              <div className="service-icon d-flex justify-content-center">
                <span className="  fa fa-user-md  fs-25 fw-700 p-1" ></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <p className="fs-18 fw-700 ">{data.title9}</p>
              <p className="fs-13 ">
                {data.content10}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default SalesForce;
