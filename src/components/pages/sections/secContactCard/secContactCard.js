import React from "react";
import { MailOutlined } from "@ant-design/icons";
import "./secContactCatd.css";
const SecContactCard = () => {
  const data = [
    {
      icon: <i className="fa fa-home" style={{ color: "white" }} />,
      title: "Address",
      desc: "1st Floor, Star Plaza, K.T. Road, Tirupati",
    },
    {
      icon: <i className="fa fa-phone" style={{ color: "white" }} />,
      title: "Phone",
      desc: " (+91) 0877-2233733",
    },
    {
      icon: <MailOutlined style={{ color: "white" }} />,
      title: "Email",
      desc: "info@sssbi.com ",
    },
  ];
  return (
    <div className='bgImg pt-5 mt-5'>
        <div className="container pt-5">
      <div className="row">
        {data.map((e) => (
          <div className="col-12 c0l-sm-12 col-md-4 col-lg-4">
            <div
              className="card  "
              style={{ border: "none", backgroundColor: "#ececec" }}
            >
              <div className="row d-flex justify-content-center ">
                <div className=" fs-23 d-flex justify-content-center">
                  {" "}
                  <div
                    className=" blob  pt-3 d-flex justify-content-center"
                    style={{ marginTop: "-30px" }}
                  >
                    {e.icon}
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ textAlign: "center", color: "#000" }}>
                <strong className="fs-20"> {e.title}</strong>
              </div>
              <div className="" style={{ textAlign: "center" }}>
                {" "}
                <p className="fs-14" style={{ color: "#000" }}>
                  {e.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SecContactCard;
