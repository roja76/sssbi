import React from 'react';
import './services.css'
const ItOutsourcing = () => {
    const data={title:'Offshore Services Information',desc:'Offshore developing is a great way of Outsourcing Technique and it is the best way to choose a right partner for IT Companies to execute their projects. Companies find it hard to keep a balance between shrinking budgets and increasing project costs.SSS is the best place for Offshore Services with effective project management, Professional Skills, Good Infrastructure, Low Project costs and mainly more resources with deadline compliance that offers to the companies of all sizes at very low cost.In this high competitive world of software development we have already established our competence with a wide range of software skills. We have undertaken many projects for major clients in Europe. Detailed market studies, opportunism and expertise have made us the company of choice for a wide range of business from large to starter companies. SSS development and support required for strong industry-specific , functional and technical expertise delivered by relatively small but multi-disciplined teams. SSS offers a model that meets cost objectives,offers flexibility of resources and provide a range of specialist skills to meet their specific expectations.',content1:'Get Delivered specialized services, whilst meeting cost objectives….',content2:'SSS offers a model that meets cost objectives, offers flexibility of resources and provides a range of specialist skills to meet their specific expectations. we use a variety of engagement models to meet the individual needs of each of our customers. Our dedicated offshore team is vouched by our customers for our expertise, quality of work and commitment to business growth of our customers. You can choose any combination of the engagement models for different phases of your project.',
    title1: "TIME & EXPENSES",
    title2:'FIXED COST',
    title3:'SUPPORT PACKAGE',
    title4:'DEDICATED RESOURCES',
    content3:
      "Pay according to actual man-hours used and actual expenses incurred, if any. The scope of the project is usually adjusted along the way.",
      content4:'If you can define the solution in detail up front, we can quote a fixed price for your project. The requirements specification must remain frozen throughout the project if you choose this model.',
      content5:'Invest in a number of man-hours up front in order to allow us to handle small ad-hoc tasks without the hassle and delays caused by many small invoices and payments.',
      content6:'Achieve the best results and get the best prices by entering into a long terms agreement for resources that are dedicated to work exclusively on your projects.'
    }
    return (
        
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 pl-5'>
                <h3 className='fs-18 pl-3 fw-700  '>{data.title}</h3>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 pl-5 pt-2 d-flex justify-content-center'>
                    <p className='fs-13 pl-3 pr-5'>{data.desc}</p>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 pl-5 pt-2 pr-5'>
                <blockquote ><p className='d-flex justify-content-center'>
<strong className='fs-18 fw-700 '>{data.content1}</strong>
</p></blockquote>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 pl-5 pt-2 d-flex justify-content-center'>
                    <p className='fs-13 pr-3 pl-3'>{data.content2}</p>
                </div>
            </div>
            <div className="row pl-5 p-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row pl-5 pr-5 ">
            <div className="col-1">
              <div class="service-icon d-flex justify-content-center ">
                <span class=" fa fa-clipboard icon_clipboard fs-20 pt-2"></span>
              </div>
            </div>
            <div className="col-12 col-md-8 ml-3">
              <p className="fs-18 fw-700 ml-5">{data.title1}</p>
              <p className="fs-13 ml-5">{data.content3}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row pl-5 pr-5 ">
            <div className="col-2 ">
              <div class="service-icon d-flex justify-content-center ">
                <span class="  fa fa-user icon_clipboard  fs-20 pt-2"></span>
              </div>
            </div>
            <div className="col-12 col-md-8 ml-3">
              <p className="fs-18 ml-4 fw-700">{data.title2}</p>
              <p className="fs-13 ml-4">
                {data.content4}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-5 p-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row pl-5 pr-5 ">
            <div className="col-1">
              <div class="service-icon d-flex justify-content-center ">
                <span class=" fa fa-clipboard icon_clipboard fs-20 pt-2"></span>
              </div>
            </div>
            <div className="col-12 col-md-8 ml-3">
              <p className="fs-18 fw-700 ml-5">{data.title3}</p>
              <p className="fs-13 ml-5">{data.content5}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row pl-5 pr-5 ">
            <div className="col-1">
              <div class="service-icon d-flex justify-content-center ">
                <span class="  fa fa-user icon_clipboard  fs-20 pt-2"></span>
              </div>
            </div>
            <div className="col-12 col-md-8 ml-3">
              <p className="fs-18 ml-4 fw-700">{data.title4}</p>
              <p className="fs-13 ml-4">
                {data.content6}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-5 d-flex justify-content-center'>
            <img className='img-fluid' src="https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/offshore01-1.jpg?w=973&ssl=1" width="100%"/>
            
        </div>
        </div>
    );
}

export default ItOutsourcing;
