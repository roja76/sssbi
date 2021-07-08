import React from 'react';

const OracleBusiness = () => {
    const data = {
        content1:
          "SSS Oracle E-Business Suite (EBS) practice empowers organizations to implement and upgrade their Oracle EBS infrastructure. Additionally, it offers consulting services to clients all over the globe. Our clients are spread across the Americas, Europe and APAC regions. Around 20% of our clients hail from the hi-tech and manufacturing space whereas 15% of our customers are banking, financial services, and insurance (BFSI) companies.",
        content2:
          "We partner with clients, helping through the following stages: implementation, rollout, upgrade, development, and support.",
        content3:
          "The Oracle EBS practice leverages and unifies core EBS modules that consist of a collection of supply chain management (SCM), manufacturing, customer relationship management (CRM), and enterprise resource planning (ERP) computer applications. It also comprises the Human Resources Management System (HRMS), database technologies (engines for Java, .NET, XML, RDBMS, and PL/SQL), and the “technology stack” (which includes the Oracle Forms and Reports Servers, Oracle Discoverer, Apache Web Server, and Jinitiator). It also consists of edge products such as Demantra, OTM, Primavera, and OPH as well as cloud products like Fusion Apps, Oracle Taleo, and Fusion Accounting Hub.",
        content4:
          "We have the experience of more than 50 consultants; a rich mix of solution architects, techno-functional consultants, and seasoned program/project managers; over half of whom are certified by EBS. Our collective expertise across organizations, industry verticals, and domains has led to more than 30 implementations, 20 upgrades, and in excess of 50 application support & maintenance, and application development services.",
        img1:
          "https://i2.wp.com/www.sssbi.com/wp-content/uploads/2020/07/ebs_r12_architecture_diagram2.png?resize=300%2C195&ssl=1",
      };
    return (
        <div className='container-fluid'>
            <strong className='pl-5 fs-18'>Oracle E-Business Suite</strong>
            <div className="row d-flex justify-content-center">
        <div className="col-10 p-3">
          <p className="fs-13">{data.content1}</p>
        </div>
        <div className="col-10 p-3">
          <p className="fs-13">{data.content2}</p>
        </div>
        <div className="col-10 p-3">
          <p className="fs-13">{data.content3}</p>
        </div>
        <div className="col-10 p-3">
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid"
              src={data.img1}
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
        <div className="col-10 p-3">
          <p className="fs-13">{data.content4}</p>
        </div>
      </div>
        </div>
    );
}

export default OracleBusiness;
