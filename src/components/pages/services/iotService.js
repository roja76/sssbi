import React from 'react';
import { SecReadMore } from "../sections";


const IotService = () => {
    const data = {
        title1: "IoT- The next big revolution in Digital Technology computing",
        content1:
          "SSS Offers complete IoT solutions for all major processes, Services, Things, People and industries. Become a next big wave in emerging Technological IoT innovation With SSS, that empowers your business success through innovative and advanced information models & Techniques that boosts your productivity.",
        img1:
          "./assets/images/iot-1.png",
        img2:
          "./assets/images/iot-2.png",
        title2: "Stay Connected to Users With simplified Software",
        title3:'Future Trends & Pointers in IoT - A New era that scales automated business IoT Solutions across the Globe',
        content2: "Various Popular Technologies in which IoT is used",
      };
      const cardData = [
        {
          icon: <i class="fa fa-bar-chart" />,
          title: "THE INTERNET OF THINGS AND SERVICES",
          desc:
            "IoT also called as Internet of Things, The New Era of Technological Revolution has already started changing the",
          readMore:
            "world with its latest innovations.Each and Every thing is uniquely identifiable with a computing system and connectivity that enables for quick collection, aggregation and exchange of data in diverse locations. It is one of the best platforms for Smart Energy Management and Smart City Systems.",
        },
        {
          icon: <i class="fa fa-line-chart" />,
          title: "ENABLING TECHNOLOGIES FOR IOT",
          desc:
            "In Present scenario IoT revolution is accelerating at an impressive speed and considerable growth in which almost",
          readMore:
            "all emerging technologies are enabling IoT. It is expected that the Future Technology stack with Internet of Things will have a major dynamic representation on dominant ecosystems that brings several advantages to enterprise market.",
        },
        {
          icon: <i class="fa fa-pie-chart" />,
          title: "	A LEAP IN TO THE FUTURE",
          desc:
            "IoT market is endless and is considered as a premier frontier in Customer centric in creating a smarter Technology",
          readMore:
            "world. It creates new innovative business models and brings more sophistication to data with multiple Security & Privacy levels in an intelligent way. It shows a lot of positive signs about promising future with easy adaption of latest technological developments and unified ecosystem of all devices.",
        },
        {
          icon: <i class="fa fa-hand-peace-o" />,
          title: "IOT SOLUTIONS AND SECURITY",
          desc:
            "IoT Solutions and Security has become main focal point of attention for the Technology Industry today.",
          readMore:
            "SSS’s New Efforts and Initiatives in IoT have defined best standards and security practices. SSS is pretty much experienced in handling various security issues in different Perspectives.",
        },
      ];
    return (
        <div className="container mb-5 mt-5">
          <h3 className="fs-30 ">{data.title1}</h3>
          <p className=" fs-20 ">{data.content1}</p>
        <div className="row p-5 pl-3">
          {cardData.map((e) => (
            <div className="col-12 col-md-6 p-3 ">
              <div className="row">
                  <div className="col-1 pr-5">
                <div className="service-icon d-flex justify-content-center">
                  <div className="icon_clipboard fs-25 fw-700 p-1">{e.icon}</div>
                </div>
                </div>
                <div className="col-10">
                  <h5 className="fs-20 pt-4">
                    <strong>{e.title}</strong>
                  </h5>
                  <p className="fs-18 pt-2">
                    {e.desc}
                    <br />
                    <SecReadMore readMore={e.readMore} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row pl-5 ">
          <h5 className="col-12 fs-20">
            <strong>{data.title2}</strong>
          </h5>
          <p className="col-12 fs-18">{data.content2}</p>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <ul className="fs-18 pt-5">
              <li>RFID</li>
              <li>Optical Technologies and Tags Like Li-Fi</li>
              <li>Quick Response Code</li>
              <li>Bluetooth Low Energy – BLE</li>
              <li>Low Energy Wireless IP Networks</li>
              <li>Communication Technologies Like Zigbee &amp; Thread</li>
              <li>Communication Protocol like Z-wave</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img className='mb-3' height='80%' width='100%' src={data.img1} />
          </div>
        </div>
  
        <div className='row pl-5'>
            <div className='col-12 fs-30 pl-5'>{data.title3}</div>
            <div className='col-12 d-flex justify-content-center pr-5'><img width='75%' src={data.img2} /></div>
        </div>
      </div>
    );
}

export default IotService;
