import React from 'react';

import {SecReadMore} from '../index';

import BIprocess from '../images/BI-Process_3-1.png';
import BIimg2 from '../images/Business_Intelligence_1-2.png';
import BIindus from '../images/BI-indus.png';



const ServiceBiSolution = () => {
    const headerData = {
        title: 'Empower your Business with SSS Business Intelligence Services',
        desc:'SSS-Trusted World class Business Intelligence Solutions  Provider is ideal for companies and departments in all industries that are looking for a flexible business intelligence solution that’s powerful enough to crunch complex data. SSS’s modular, scalable, standards-based solution architecture provides the flexibility needed to easily deploy in any environment.',
    } 
    const cardData = [
        {icon:<i class="fa fa-bar-chart "/>,title:'BUSINESS INTELLIGENCE PLATFORM', desc:'Provide fast, self-service access to decision-ready business intelligence SSS empowers business users with', readMore:'anytime,  anywhere access to key BI insights delivered in context. We can help you implement a flexible business intelligence platform that will increase responsiveness, reduce IT costs and workload, improve performance, and drive better decision making across the organization.'},
        {icon:<i class="fa fa-line-chart "/>,title:'DASHBOARD AND APPLICATIONS', desc:'Drive better performance with high-impact dashboards and BI applications Promote BI adoption across your', readMore:'organization with compelling, insightful data dashboards  and apps that make your numbers easy to understand at a glance. With our user-friendly BI tools, you can create mobile, highly interactive, role-based dashboards that deliver trusted, aggregated data to your decision makers – anytime, anywhere.'},
        {icon:<i class="fa fa-pie-chart"/>,title:'DATA VISUALIZATION', desc:'Use data to tell stories that captivate audiences through data visualization SSS empowers business users to better', readMore:'understand data – so they can turn that data into compelling and engaging stories for specific audiences. With intuitive data visualization solutions from SSS, your business users can quickly and easily are Combine data from multiple sources, Visualize data and analyze trends, Share infographics and data stories, Deliver critical information on mobile devices'},
        {icon:<i class="fa fa-hand-peace-o"/>,title:'RANKING REPORTS AND "WHAT IF" ANALYSIS', desc:'Share actionable insights with enhanced business intelligence reporting SSS’s “What if” Analysis methods helps to', readMore:'formulate strategies with accurate strategy planning to achieve successful Targets. Create a better reporting system to guide your overall business intelligence strategy and deliver meaningful insights that provide real value to your employees, customers, and partners. Produce pixel-perfect data visualizations that are easy to understand and act on – and use our ad hoc reporting tools to offer immediate answers to new and evolving business questions via the Web, your desktop, or a mobile device.'},
    ]

    return (
        <div className='container mt-5'>
            <h3>{headerData.title}</h3>
            <p className='fs-18'>{headerData.desc}</p>
            <div className='container w-75' >
                <div className='row mt-3'>
                    {cardData.map((e)=>(
                        <div className='col-12 col-md-6 p-3 '>
                            <div className='row'>
                                <div className='col-2'>
                                <div className="service-icon d-flex justify-content-center">
                                   <div className="icon_clipboard fs-25 fw-700 p-1"> {e.icon} </div>
                                   </div>
                                </div>
                                <div className='col-10'> 
                                    <h5><strong>{e.title}</strong></h5>
                                    <p>{e.desc}<br/>
                                    <SecReadMore readMore={e.readMore}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-3'>
                <h5><strong>OUR PROCESS – DRIVE BETTER DECISION MAKING THROUGHOUT YOUR ORGANIZATION</strong></h5>
                <img src={BIprocess} className='d-flex justify-content-center' alt='bi-process' width='100%'/>
                <h5 className='mt-4'><strong>TAKE THE FAST LANE WITH RAPID DEPLOYMENT</strong></h5>
                <p className='fs-16'>
                Businesses today need BI tools to measure their industry-specific metrics and KPI’s, and provide on-time, ask-any-question data analysis for any business user to make the best decisions possible. With almost a decade of delivering Business Intelligence (BI) solutions to our customers, we excel at the design and implementation of business intelligence and data warehouse applications. Our attention to these core competencies makes us a compelling option for your next project.
                </p>
            </div>
            <div className='row'>
                <div className='col-8'>
                <h5 className='mt-4'><strong>OUR KEY SERVICES</strong></h5>
                <div className='row fs-16'>
                    <div className='col-12 col-md-6'>
                    <ul>
                        <li>Enterprise data warehousing</li>
                        <li>Application development</li>
                        <li>Architecture and design</li>
                        <li>Customised reporting and visualisation</li>
                        <li>Advanced analytics</li>
                        <li>Strategy assessment and development</li>
                        <li>Data integration and quality management</li>
                        <li>Master data management</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6'>
                    <ul>
                        <li>Data migration</li>
                        <li>Metadata management</li>
                        <li>Project management</li>
                        <li>Cloud Applications</li>
                        <li>Mobile apps</li>
                        <li>System integration</li>
                        <li>Web and mobile solutions</li>
                        <li>Dashboard design and development</li>
                        <li>Data management architecture</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-4'>
                    <img src={BIimg2} alt='BI'/>
                </div>
            </div>
            <div className="card cddb  mt-5  ">
            <div className="card-body">
              <blockquote className=" p-3 d-flec justify-content-center"><i>
                  <h4>NEXT GENERATION OF BI CORPORATE PERFORMANCE MANAGEMENT:</h4>
                <p className='fs-20' >
                CPM, Next generation of BI, helps to describe several methodologies that best leverages the performance of the process oriented system and exposes the profitable arena to accomplish the objectives.
                </p></i>
              </blockquote>
            </div>
          </div>
          <div className='mt-5'>
                <h5><strong>SSS’S FOOT PRINT ON VARIOUS INDUSTRIES AND DEPARTMENTS IN BI ARE LIKE:</strong></h5>
                <div className='row'>
                    <div className='col-12 col-md-4 p-1'>
                    <p>
                        <strong>Healthcare</strong><br/>
                        Improve patient outcomes. Increase operational efficiency and profitability.<br/>
                        <strong>Financial Services</strong><br/>
                        Manage risk. Reduce costs. Strengthen customer relationships. Create profitable growth.<br/>
                        <strong>Retail</strong><br/>
                        Maximize resources and profit. Analyze customers, products, and transactions by channel.<br/>
                        <strong>Manufacturing</strong><br/>
                        Operate leaner. Make smarter decisions. Create operational and supply-chain efficiencies.
                    </p>
                    </div>
                    <div className='col-12 col-md-4 p-1'>
                    <p>
                        <strong>Public Sector</strong><br/>
                        Make the most cost-effective decisions in the most efficient manner.<br/>
                        <strong>Energy & Utilities</strong><br/>
                        Create new efficiencies. Improve forecasting accuracy. Track leading indicators. Increase sales. Reduce costs.<br/>
                        <strong>Communications</strong><br/>
                        Refine strategies. Adapt to changing markets. Centralize processes. Increase customer loyalty.<br/>
                        <strong>Consumer Products</strong><br/>
                        Analyze trends to capture market share and consumer loyalty.
                    </p>
                    </div>
                    <div className='col-12 col-md-4 p-1 d-flex justify-content-center'>
                        <img src={BIindus} alt='BI' height='280px' width= '350px'/>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default ServiceBiSolution;
