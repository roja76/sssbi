import React from 'react';
import { SecReadMore } from "..";
const SecWebInterFace = () => {
    const data=[
        {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Web-Interface_3-1.png?resize=600%2C379&ssl=1",
            title: "Web Interface",
            desc: "We are specialized in developing Responsive Static, Dynamic, E commerce and Open Source website designs with advanced framework based on business requirements of clients.",
            url:"/web-interface"
          },
          {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXa3BawZU-TC8IMujMxHOEhovkb1jyP11Fvru6Efel_5V0MeGSyxVgV-pvQGQkN2Tw1w&usqp=CAU",
            title: "Digital Marketing",
            desc: "A brand leader in the online marketing industry, is specialized in understanding the customer prospects and encompasses to develop, Plan.",
            url:"/digital-marketing"
          },
         
          {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jg-5JRNR32f55laK06XM9kq5X0Q_Y9yVtQ&usqp=CAU",
            title: "IT Outsourcing",
            desc: "SSS development and support required for strong industry-specific , functional and technical expertise delivered by relatively small but multi-disciplined teams.",
            url:"/it-outsourcing"
          },
          {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2020/01/salesforce.jpg?w=1236&ssl=1",
            title: "Sales Force",
            desc: "SSS specializes in the architecture, implementation, customization, and integration of a broad suite of Salesforce services and solutions.",
            url:"/sales-force"
          },
    ]
    return (
        <div className="container">
      <div className="row">
        {data.map((e) => (
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 p-3">
            <div
              className="card cd"
            >
              <img
                className="card-img-top imgamt"
                src={e.img}
                alt="Card image cap"
              />
              <div className="d-flex justify-content-center">
                <span
                  className=" justify-content-center ic pl-3 pt-2"
                  style={{
                    marginTop: "-22px",
                    marginLeft: "190px",
                    
                  }}
                >
                  <a href={e.url}>
                  {e.icon}</a>
                </span>
              </div>
              <div className="card-body" style={{ backgroundColor: "#f0f1f5" }}>
                <strong className="fs-18">{e.title}</strong>
                <p className="fs-12 pt-2">
                  {e.desc}
                  <br />
                  <p className='pt-3 fs-12'>
                  <a href={e.url}> <button type="button" className='read-more-text btn  bheight' ><span className='fs-12' style={{display:'block'}}>See more</span></button>  
</a></p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    );
}

export default SecWebInterFace;
