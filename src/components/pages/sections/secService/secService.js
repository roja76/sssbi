import React from "react";
import './secService.css'
import {LineChartOutlined} from '@ant-design/icons';
const SecService = (props) => {
  const { cardData } = props;
    // const cardData = [
    //     {icon:<i className="fa fa-line-chart" />,title:'Assured High Quality', desc:'We thrive on taking on client’s challenges and deliver high quality solutions'},
    //     {icon:<i className="fa fa-globe" />,title:'Huge Global Arena', desc:'We use our world-class methodologies and processes & tools'},
    //     {icon:<i className="fa fa-thumbs-o-up" />,title:'Guaranteed Satisfaction', desc:'We measure client satisfaction and deliver on time above client’s expectation'},
    //     {icon:<i className="fa fa-arrows-alt" />,title:'Accountbility', desc:'We take responsibility for both our successes and our failures.'},
    // ]
  return (
    <div className="container py-5 secService ">
      <div className="row  d-flex justify-content-center " >
      {cardData.map((e,index)=>(
        <div className="col-12 col-sm-12 col-md-3 col-lg-3   text-center " key={`secServiceBox${index}`}  >
          <div className="row  d-flex justify-content-center " >
            <div className="service-icon" >
              <span className="  fs-25 m-1  ">{e.icon}</span>
            </div>
          </div>
          <div className='row   pt-4 d-flex justify-content-center flex-column'>
            <h3 className='fs-18 my-0 position-relative '  >{e.title}</h3>
            <span className="header-line mt-2 bg-color-1st" ></span>
            </div>
          <div className='row    d-flex justify-content-center' ><p className='fs-13 m-0 py-3 px-3'  >{e.desc}</p></div>
        </div>
         ))}
      </div>
    </div>
  );
};

export default SecService;
