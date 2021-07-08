import React from 'react';

const DigitalMarketing = () => {
    const header={desc:'Srinivasan Software Solutions Pvt Ltd.,(SSS) Digital Marketing Agency was built on the foundation of driving measurable results that allowed us to provide the quality services in all facets of Digital Marketing. SSS, A brand leader in the online marketing industry, is specialized in understanding the customer prospects and encompasses to develop, Plan, and execute the integrated Online Marketing Strategy that increases the site engagement and online sales that determines the Business Success.',title:"SSS Digital Marketing Agency - Get closer to your customer needs in the Business space"}
    const data= {
        heading: "Our comprehensive list of Digital Marketing Services:",
        title1: "SEARCH ENGINE OPTIMIZATION SERVICES",
        title2: "SEARCH ENGINE MARKETING SERVICES",
        title3: "CONTENT MARKETING PROCESS",
        title4: "Web Analytics",
        title5: "SOCIAL MEDIA MARKETING & ADVERTISING",
        title6: "CONVERSION RATE OPTIMIZATION",
        title7: "ONLINE REPUTATION MANAGEMENT",
        title8: "INBOUND STRATEGIC CAMPAIGNS",
        title9: "OUTBOUND STRATEGIC CAMPAIGNS",
        img1:
          "./assets/images/dm/dm-1.jpg",
        img2:
          "./assets/images/dm/dm-2.jpg",
        img3:
          "./assets/images/dm/dm-3.jpg",
        img4:
          "./assets/images/dm/dm-4.jpg",
        img5:
          "./assets/images/dm/dm-5.jpg",
        img6:
          "./assets/images/dm/dm-6.jpg",
        img7:
          "./assets/images/dm/dm-7.jpg",
        img8:
          "./assets/images/dm/dm-8.jpg",
        img9:
          "./assets/images/dm/dm-9.jpg",
      };

      const data1={title1:'RESEARCH AND MARKET ANALYSIS',title2:'Connecting - Your Business to the online world',
    img1:'./assets/images/dm/dm1-1.jpg',
img2:'./assets/images/dm/dm1-2.png',
img3:'./assets/images/dm/dm1-3.png'}

    return (
        <div className='container mt-5 mb-3'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 p-5'>
                        <h3 className='fs-30'>{header.title}</h3>
                        <p className='fs-18 d-flex justify-conetnt-center'>
                        {header.desc}
                        </p>
                    </div>
                </div>  
            </div>
            <div className="container-fluid">
      <div className="row">
        <div className="col-12 pl-5">
          <h3 className=" fs-30">{data.heading}</h3>
        </div>
      </div>
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500  p-2"> {data.title1}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img1}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li style={{ textAlign: "left" }}>
                Best Practices on Off Page &amp; On Page
              </li>
              <li style={{ textAlign: "left" }}>&nbsp;SEO Tracking</li>
              <li style={{ textAlign: "left" }}>
                &nbsp;Social, Local and Mobile Strategies
              </li>
              <li style={{ textAlign: "left" }}>&nbsp;SEO Auditing Services</li>
              <li style={{ textAlign: "left" }}>
                &nbsp;Technical Website Optimization
              </li>
              <li>&nbsp;Keyword Segmentation</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2">{data.title2}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img2}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Results Driven ROI Strategies</li>
              <li>Transparent Communication</li>
              <li>Integrated Omni channel Marketing</li>
              <li>In-depth Research &amp; Analysis</li>
              <li>Leveraging Ad &amp; Search Networks</li>
              <li>Google Search Methodologies</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2"> {data.title3}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img3}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Audience and User Research</li>
              <li>&nbsp;Building Personas using a Powerful Search Engine</li>
              <li>&nbsp;Strategic Content Preparation</li>
              <li>&nbsp;Compelling Optimized Content Development</li>
              <li>&nbsp;Creative Formatting &amp; Refining Hypothesis</li>
              <li>&nbsp;Concentric Content Marketing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500  p-2"> {data.title4}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img4}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Navigating Google Analytics</li>
              <li>Actionable Web Insights</li>
              <li>Social CRM &amp; Analytics</li>
              <li>Social Media &amp; Web Analytic Tools</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2">{data.title5}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img5}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Building Follower Base</li>
              <li>&nbsp;Engaging User Management</li>
              <li>&nbsp;Result Tracking</li>
              <li>&nbsp;Rich Content Development</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2"> {data.title6}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img6}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Building and Optimizing Landing Pages</li>
              <li>&nbsp;Conversion Tracking Analysis</li>
              <li>&nbsp;Analytics Goal Implementation</li>
              <li>&nbsp;Split Testing principles</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row pl-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2"> {data.title7}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img7}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Building Awareness of Product/ Service</li>
              <li>&nbsp;Targeted Media Outreach</li>
              <li>&nbsp;Brand Positioning Strategies</li>
              <li>&nbsp;Performance Tracking</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2">{data.title8}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img8}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Staying visible online</li>
              <li>&nbsp;Actionable Metrics</li>
              <li>&nbsp;Performance Measurability</li>
              <li>&nbsp;Nurturing Lead generation</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4 className="fs-23 fw-500 p-2"> {data.title9}</h4>
          </div>
          <div className="row">
            <img
              className="img-fluid"
              src={data.img9}
              style={{ height: "250px" }}
            />
          </div>
          <div className="row">
            <ul className="fs-18 p-5  justify-content-center">
              <li>Pay Per Click Advertising</li>
              <li>Content Syndication</li>
              <li>Event Marketing</li>
              <li>Task Prioritization and Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
            <div className='row pl-5'>
                <div className='col'>
            <h4 className="fs-23 fw-500 p-2">{data1.title1}</h4>
            </div></div>
            <div className='row pl-5 p-3'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
           <img className='img-fluid p-5' src={data1.img1} style={{height:'400px'}}/>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <img className='img-fluid p-5' src={data1.img2} style={{height:'400px'}}/>
            </div>
            </div>
            <div className=' pl-5'>
            <h4 className="fs-23 fw-500 p-2">{data1.title2}</h4>
            </div>
            <div className='pl-5 p-3 d-flex justify-content-center' >
           <img className='img-fluid p-5' src={data1.img3} height='400px' width='70%'/>
            </div>
        </div>
        </div>
    );
}

export default DigitalMarketing;
