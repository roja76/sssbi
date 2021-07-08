import React from 'react';

import {SecReadMore} from '../index';

import BusinessAnalytics_1 from '../images/Business-Analytics_1-1.png';

const ServiceBusinessAnalytics = () => {
    const headerData = {
        title: 'Soothing insight into your business can mean the difference between failure and success',
        desc:'SSS Business Analytics services  that gives you smart new ways to see the indications in your data. Do your own visual analysis to find new patterns at a glance. Blend any data with a click, and then share insights as a visual story.',
    } 
    const cardData = [
        {icon:<i class="fa fa-database"/>,title:'DATA MINING', desc:'Exploring data to find new patterns and relationships SSS’ Data Mining services follow standard practices of', readMore:'classification, clustering, regression, pattern recognition, and all other associated rules of data mining. This in turn allows you to solve complex business problems by revealing patterns which cannot be usually detected using standard OLAP and query tools.'},
        {icon:<i class="fa fa-search"/>,title:'STATISTICAL & QUANTITATIVE ANALYSIS', desc:'Explaining why a certain result occurred Statistical analysis involves collecting and scrutinizing every data', readMore:'sample in a set of items from which samples can be drawn. Statistical analysis can be broken downinto five discrete steps, 1) Describe the nature of the data to be analyzed. 2)Explore the relation of the data to the underlying population. 3)Create a model to summarize understanding of how the data relates to the underlying population. 4)Prove (or disprove) the validity of the model. 5)Employ predictive analytics to run scenarios that will help guide future actions. The goal of statistical analysis is to identify trends. A retail business, for example, might use statistical analysis to find patterns in unstructured and semi-structured customer data that can be used to create a more positive customer experience and increase sales.'},
        {icon:<i class="fa fa-chevron-circle-left"/>,title:'MULTIVARIATE TESTING', desc:'Experimenting to test previous decisions The purpose of multivariate testing is to simultaneously gather', readMore:'information about multiple variablesand then conduct an analysis of the data to determine which recipe results in the best performance. Multivariate data can be analyzed by using either parametric or non-parametric analysis methods.'},
        {icon:<i class="fa fa-rocket"/>,title:'PREDICTIVE ANALYTICS', desc:'Forecasting future results Predictive models and analysis are typically used to forecast future probabilities. Applied to', readMore:'business, predictive models are used to analyze current data and historical facts in order to better understand customers, products and partners and to identify potential risks and opportunities for a company. It uses a number of techniques, including data mining, statistical modeling and machine learning to help analysts make future business forecasts.'},
    ]

    const readMore = (<ul>
<li>A new database is no reason to wait – analytics usually works on different systems, not off production systems anyway.</li>
<li>Lack of customer data capture is no reason either – there’s plenty to be done on billing/ product/ store/ pricing/ promo data till customer data flows in.</li>
<li>Waiting for your team is a real bad reason – unless analytics is in the DNA of the organization you will need to outsource – not for the arms and legs but for perspective and experience.</li></ul>)
    

    return (
        <div  className=' mt-5'>
            <h3>{headerData.title}</h3>
            <p className='fs-18'>{headerData.desc}</p>
            <div className='container w-75' >
                <div className='row mt-3'>
                    {cardData.map((e)=>(
                        <div className='col-12 col-md-6 p-3 '>
                            <div className='row'>
                                <div className='col-2'>
                                <div className="service-icon d-flex justify-content-center"> 
                                <div className="icon_clipboard fs-25 fw-700 p-1"> {e.icon}</div>
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
            <h5><strong>Advanced techniques for next level business growth</strong></h5>
            <p className='fs-16'>
                Business analytics is used to gain insights that inform business decisions and can be used to automate and optimize business processes. Data-driven companies treat their data as a corporate asset and leverage it for competitive advantage. Successful business analytics depends on data quality, skilled analysts who understand the technologies and the business and an organizational commitment to data-driven decision making.
            </p>
            <p><strong>Our insights have helped companies improve efficiency, reduce costs, increase competitiveness and effectively trade off risk against available opportunities.</strong></p>
            </div>
            <h5 className='mt-4'><strong>OUR KEY SERVICES</strong></h5>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <ul>
                    <li>&nbsp;Big data analytics</li>
                    <li>&nbsp;Advanced Analytics
                    <ul>
                    <li>Data Mining</li>
                    <li>Text Mining</li>
                    <li>Complex Event Processing (CEP)</li>
                    <li>Business Process Simulations</li>
                    <li>Optimization</li>
                    </ul>
                    </li>
                    <li>&nbsp;Real Time Simulation</li>
                    <li>Enterprise Performance Management</li>
                    <li>&nbsp;Machine Learning</li>
                    </ul>
                </div>
                <div className='col-12 col-md-4'>
                    <ul>
                    <li>Data Management
                    <ul>
                    <li>Data Acquisition / integration</li>
                    <li>Data Quality</li>
                    <li>Data Virtualization</li>
                    <li>Master Data Management</li>
                    <li>Data Governance</li>
                    <li>Data Storage /operations management</li>
                    </ul>
                    </li>
                    <li>Analytic Applications</li>
                    <li>&nbsp;Web analytics</li>
                    </ul>
                </div>
                <div className='col-12 col-md-4'>
                    <ul>
                    <li>Data Visualization
                    <ul>
                    <li>Architecture and Tool selection</li>
                    <li>Dashboards, Scorecards</li>
                    <li>Self-service reporting, Analytical reporting, Operational and Real time reporting</li>
                    <li>Mobile delivery</li>
                    <li>Platform upgrade or migration</li>
                    <li>Portal integration</li>
                    <li>Platform administration and support</li>
                    </ul>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-7'>
                <h5 className='mt-4'><strong>OUR KEY SERVICES</strong></h5>
                <p className='fs-16'>
                    This is where you do nothing till everything is perfect. Till you have data on all your customers, till all data sources are in place, till that shiny new Data PoC is complete, till your new team is hired, till..
                    There is only one good time to get more Analytics driven, and that is now. The number of steps to go through and the amount of learning to get through is larger than you can imagine, so 3 months of delay is just that – 3 months of delay.
                    <SecReadMore readMore={readMore}/>
                </p>
                </div>
                <div className='col-12 col-md-5'>
                    <img src={BusinessAnalytics_1} height='300px' width='100%' alt='Business-Analytics_1-1'/>
                </div>
            </div>
        </div>
    );
}

export default ServiceBusinessAnalytics;
