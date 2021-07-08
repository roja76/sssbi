import { Button } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {About,Home,Contact,Temp, Servicepage, SuccessStories} from "./components/pages";
  import { SiteLayout } from "./components/shared";
  import {Page01, Page02, Page03, Page04, Page05, Page06 } from './components/pages/sections';
  import {SecPlacement,SecCareers, SecAddPost} from './components/pages/sections';
import BiSolutions from './components/pages/services/biSolutions';
import BusinessAnanlytics from './components/pages/services/businessAnanlytics';
import BigData from './components/pages/services/bigData';
import IotService from './components/pages/services/iotService';
import WebInterface from './components/pages/services/webInterface';
import DigitalMarketing from './components/pages/services/digitalMarketing';
import StaffingServices from './components/pages/services/staffingServices';
import ItOutsourcing from './components/pages/services/itOutsourcing';
import OracleBusiness from './components/pages/services/oracleBusiness';
import SalesForce from './components/pages/services/salesForce';

const Routes = () => {
    return (
      <Switch>
        <SiteLayout path="/home" component={Home} pagename={'home'} />
        <SiteLayout path="/temp" component={Temp} pagename={'temp'} />
        <SiteLayout path="/about-us"component={About} pagename={'about'} />
        <SiteLayout path="/contact-us"component={Contact} pagename={'contact'} />
        <SiteLayout path='/services' component={Servicepage} pagename={'services'}/>
        <SiteLayout path='/success-stories' component={SuccessStories} pagename={'successstories'}/>
        <SiteLayout path='/Placement' component={SecPlacement} pagename={'Placement'}/>
        <SiteLayout path='/careers' component={SecCareers} pagename={'careers'}/>
        <SiteLayout path='/add-post' component={SecAddPost} pagename={'add post'}/>


        

        {/* team page */}
        <SiteLayout path="/rangarajan-kandadai"component={Page01} pagename={'Rangarajan Kandadai'} />
        <SiteLayout path="/kalyani-rangarajan"component={Page02} pagename={'Kalyani Rangarajan'} />
        <SiteLayout path="/ranganathan-tirumalai-ananthampullai"component={Page03} pagename={'Ranganathan Tirumalai Ananthampullai'} />
        <SiteLayout path="/satya-narayana-rayapureddi"component={Page04} pagename={'Satya Narayana Rayapureddi'} />
        <SiteLayout path="/murari-seshadri"component={Page05} pagename={'Murari Seshadri'} />
        <SiteLayout path="/venkata-subramanian-dhandapani"component={Page06} pagename={'Venkata Subramanian Dhandapani'} />

          {/* service page */}
          <SiteLayout path="/bi-solutions" component={BiSolutions} pagename={'Bi Solutions'}/>
          <SiteLayout path="/business-Analytics" component={BusinessAnanlytics} pagename={'Business Ananlytics'}/>
          <SiteLayout path="/big-data" component={BigData} pagename={'Bid Data'}/>
          <SiteLayout path="/iot" component={IotService} pagename={'IOT'}/>
          <SiteLayout path="/web-interface" component={WebInterface} pagename={'Web Interface'}/>
          <SiteLayout path="/digital-marketing" component={DigitalMarketing} pagename={'Digital Marketing'}/>
          <SiteLayout path="/staffing-services" component={StaffingServices} pagename={'Staffing Services'}/>
          <SiteLayout path="/it-outsourcing" component={ItOutsourcing} pagename={'It Outsourcing'}/>
          <SiteLayout path="/oracle-business" component={OracleBusiness} pagename={'Oracle Business'}/>
          <SiteLayout path="/sales-force" component={SalesForce} pagename={'Sales Force'}/>
          

        <SiteLayout path=""component={Home} pagename={'home'} />

      </Switch>
    );
}

export default Routes;
