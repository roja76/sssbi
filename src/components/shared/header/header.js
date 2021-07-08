import React from "react";
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import "./header.css";

const Header = () => {
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }

  const aboutUs = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('about-us')}}>
          About Us
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.dikshasea.com/">
          Training
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('life-at-sss')}} >
          Life@SSS
        </a>
      </Menu.Item>
    </Menu>)

const services = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('bi-solutions')}}>
      BI Solutions
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('business-analytics')}}>
      Business Analytics
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('big-data')}}>
      Big Data
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('iot')}}>
      IoT
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('web-interface')}}>
      Web Interface
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('digital-marketing')}}>
      Digital Marketing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('staffing-services')}}>
      Staffing Services
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('it-outsourcing')}}>
      IT Outsourcing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('sss-oracle-e-business-suite')}}>
      Oracle E-Business Suite
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>{onNavigation('salesforce')}} >
      Salesforce
      </a>
    </Menu.Item>
   
  </Menu>)


  return (
  <div >
    <div className='subheader-info bg-color-2nd p-2'>
      <div className='container'>
          <div className='row '>
            <div className='col text-left fs-13 text-white'>
            <i className="fa fa-map-marker pr-2 text-white"/>
            1st Floor, Star Plaza, K.T. Road, Tirupati
            </div>
            <div className='col text-center fs-13 text-white'>
            <i className="fa fa-files-o pr-2 text-white"/>
            <a href="mailto:info@sssbi.com" className='text-white'>info@sssbi.com </a>
            | <a href="tel:(+91) 0877-2233733" className='text-white'>(+91) 0877-2233733</a>
            </div>
            <div className='col text-right fs-13 text-white'>
            <i className="fa fa-clock-o pr-2 text-white"/>
            Mon - Fri: 9:30 am to 6:30 pm
            </div>
          </div>
      </div>
    </div>
    <div className="d-flex sec-header">
      <div className="container px-0" >
        <nav className="navbar navbar-expand-md navbar-light justify-content-between align-items-center px-0">
          <a onClick={()=>{onNavigation('')}} className="navbar-brand col-auto pl-0">
            <h1 className='m-0'>
              <img className="logo"  src="./assets/images/sss-logo.png"/>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         <div className="col pr-0">
          <div className="collapse navbar-collapse menu justify-content-between " id="navbarCollapse">
          {/* <a className="nav-link" onClick={()=>{onNavigation('about-us')}}>  About Us </a> */}
          <Dropdown overlay={aboutUs}> 
          <a className="nav-link p-3" onClick={()=>{onNavigation('about-us')}}>  About </a>
          </Dropdown>
            {/* <a className="nav-link" onClick={()=>{onNavigation('services')}}>  Services </a> */}
            <Dropdown overlay={services}>
            <a className=" p-3" onClick={()=>{onNavigation('services')}}>
              Services  
            </a>
          </Dropdown>
            <a className="nav-link" onClick={()=>{onNavigation('success-stories')}}> Success Stories </a>
            <a className="nav-link"onClick={()=>{onNavigation('placement')}}>  Placement </a>
            <a className="nav-link"onClick={()=>{onNavigation('careers')}}>  Careers </a>
            <a className="nav-link" href='https://ssssupport.blogspot.com/'>  Blog </a>
            <a className="nav-link" onClick={()=>{onNavigation('contact-us')}}>  Contact Us </a>
          </div>
         </div>
         <div className='col d-flex justify-content-end'>
            <a  className="nav-link  fs-16 text-dark px-4 py-3 " onClick={()=>{onNavigation('search')}}><i className="fa fa-search " aria-hidden="true"></i></a>
            </div>
        </nav>
       
      </div>
    </div>
  </div>
  );
};

export default Header;
