import React from 'react';
import { SecReadMore } from "..";
const SecHr = () => {
    const data=[
        {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://www.macropusglobal.com/wp-content/uploads/2017/05/macropus-staffing-service.jpg",
            title: "Staffing Services",
            desc: "Attracting high calibre HR professionals who are aligned with your organization’s purpose and values can be a huge challenge",
            url:"/staffing-services"
          },
          {
            icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu404n9eUk1kYqY12tAoGT-1GMeJvLFyPz9g&usqp=CAU",
            title: "Human Resources",
            desc: "Human resource management as a department in an organisation handles all aspects of employees and has various functions",
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
                <strong className="fs-18 ">{e.title}</strong>
                <div className='d-flex justify-content-left'>
                <p className="fs-12 pt-2">
                  {e.desc}
                  <br />
                  <p className='pt-3 fs-12'>
                  <a href={e.url}> <button type="button" className='read-more-text btn  bheight' style={{color:'#fff !important'}} ><span className='fs-12' style={{display:'block'}}>See more</span></button>  
</a></p>  
                </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default SecHr;
