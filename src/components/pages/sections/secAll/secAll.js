import React from "react";
import './secAll.css'

const SecAll = () => {
  const data = [
    {
      icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
      img: "https://www.swaransoft.com/img/solutions/BI_Solution.png",
      title: "Bi Solutions",
      desc: "SSS-Trusted World className Business Intelligence Solutions",
      readMore:'SSS-Trusted World className Business Intelligence Solutions',
      url: "/bi-solutions"
    },
    {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://www.teplar.com/blog/wp-content/uploads/2018/11/Business-Intelligence-800x540.png",
        title: "Bi Solutions",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url: "/bi-solutions"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBBnv-lj5fLhAbkYPQtdrwsJNeCscaxCwNDwNDCNkH1j2QO59gt5dqBJrlYdebH769i4&usqp=CAU",
        title: "Business Analytics",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/business-Analytics"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://miro.medium.com/max/800/1*cDO5wuA0NdevLb45zHRvog.jpeg",
        title: "Big Data",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/big-data"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwp6JnwjGac2e5HBra8mJp7Yl5NSaYaTWROg&usqp=CAU",
        title: "IOT",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/iot"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Web-Interface_3-1.png?resize=600%2C379&ssl=1",
        title: "Web Interface",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/web-interface"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXa3BawZU-TC8IMujMxHOEhovkb1jyP11Fvru6Efel_5V0MeGSyxVgV-pvQGQkN2Tw1w&usqp=CAU",
        title: "Digital Marketing",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/digital-marketing"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://www.macropusglobal.com/wp-content/uploads/2017/05/macropus-staffing-service.jpg",
        title: "Staffing Services",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/staffing-services"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jg-5JRNR32f55laK06XM9kq5X0Q_Y9yVtQ&usqp=CAU",
        title: "IT Outsourcing",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/it-outsourcing"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eUEnffIGVA5daD6kGnxBrPPyrK8efkjXBQ&usqp=CAU",
        title: "Oracle E-Business Suite",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/oracle-business"
      },
      {
        icon: <i className="fa fa-share fs-18" style={{ color: "#000" }}></i>,
        img: "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2020/01/salesforce.jpg?w=1236&ssl=1",
        title: "Sales Force",
        desc: "SSS-Trusted World className Business Intelligence Solutions",
        url:"/sales-force"
      },
  ];
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
                ><a href={e.url}>
                  {e.icon}</a>
                </span>
              </div>
              <div className="card-body" style={{ backgroundColor: "#f0f1f5" }}>
                <strong className="fs-18">{e.title}</strong>
                <p className="fs-12 pt-2">
                  {e.desc}
                  <br />
                  <p className='pt-3 fs-12'>
                  {/* <button type="button" className='read-more-text btn  bheight' ><span className='fs-12' style={{display:'block'}}>See more</span></button>  */}
                  <a href={e.url}> <button type="button" className='read-more-text btn  bheight' ><span className='fs-12' style={{display:'block'}}>See more</span></button>  
</a>
          </p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecAll;
