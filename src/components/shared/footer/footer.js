import React from 'react';
import './footer.css';

function Footer(props) {
    return (
      <div>
        <div className='text-white bg-color-2nd py-5'>
          <div className='container '>
            <div className='row '>
              <div className='col-12 col-lg-8 px-0'>
                <h3 className='text-white fs-36'>Subscribe to our newsletter</h3>
                <p>
                Subcribe to our newsletter to get the lastest<br/>
                scoop right to your inbox
                </p>
              </div>
              <div className="col-12 col-lg-4 px-0">
                <div className=' d-flex h-100 align-items-center'>
                  <div className="input-group ">
                    <input type="text" className="form-control text-subscribe" placeholder="Email"/>
                    <div className="input-group-append">
                      <button className="btn bg-color-1st  btn-subscribe text-white" type="button" id="button-addon2">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bg-color2 p-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-8 col-md-4'>
                <a href='/home'><img className="logo w-100 bg-white"  src="./assets/images/sss-logo.png"/></a>
                <p className='footer-text-color mt-3'>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor nullam quis.
                </p>
                <div className="footer-text-color" style={{listStyleType:'none'}}>
                  <li><strong>India Address</strong> Headquarters:</li>
                  <li><i className="fa fa-map-marker pr-3"/>18-1-49, 1st Floor, Star Plaza, K.T. Road, Tirupati, Andhra Pradesh, India.</li>
                  <li><i className="fa fa-phone pr-3"/>(+91) 0877-2233733, 720 721 3437</li>
                  <li><i className="fa fa-paper-plane-o pr-3"/> info@sssbi.com</li>
                  <li className="mt-3"><strong>US Address</strong></li>
                  <li><i className="fa fa-map-marker pr-3"/>16777,SW 36th Street, Miramar FL 33027 USA,</li>
                  <li><i className="fa fa-phone pr-3"/>(+1) 510 493 2202 / 714 388 6646</li>
                  <li><i className="fa fa-paper-plane-o pr-3"/>bdm@sssbi.com</li>
                </div>
              </div>
              <div className='col-12 col-md-2 '>
                <h3 className='text-white pt-2'>Follow Me</h3>
                <div className='footer-line'/>
                <div className="footer-text-color mt-4" style={{listStyleType:'none',lineHeight:'280%'}}>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-facebook pr-2"></i>Facebook</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-twitter pr-2"></i>Twitter</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-instagram pr-2"></i> Instagram</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-rss pr-2"></i> RSS</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-pinterest pr-2"></i> Pinterest</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-linkedin pr-2"></i> Linkedin</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-behance pr-2"></i> Behance</a></li>
                  <li><a href="#" className='footer-text-color'><i className="fa fa-wordpress pr-2"></i> WordPress</a></li>
                </div>            
              </div>
              <div className='col-12 col-md-2 '>
                <h3 className='text-white pt-2'>Services</h3>
                <div className='footer-line'/>
                <div className="footer-text-color mt-4" style={{listStyleType:'none',lineHeight:'280%'}}>
                  <li><a href="#" className='footer-text-color'>Web Development</a></li>
                  <li><a href="#" className='footer-text-color'>Graphic Design</a></li>
                  <li><a href="#" className='footer-text-color'>Mobile Apps</a></li>
                  <li><a href="#" className='footer-text-color'>Photography</a></li>
                  <li><a href="#" className='footer-text-color'>Branding</a></li>
                  <li><a href="#" className='footer-text-color'>Social Media Marketing</a></li>
                </div>            
              </div>
              <div className='col-sm-12 col-md-4 '>
              <h3 className='text-white pt-2'>Flickr Photos</h3>
                <div className='footer-line'/>
                <div className='row mt-4'>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4583/38276512602_fde64bda3d_z.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4546/38276496692_8a13ea4a65_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4450/37076880983_24523bfe59_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4514/23894501678_3db3d98d85_c.jpg" alt="" width="130" height="111"/>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4514/23894501678_3db3d98d85_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4450/37076880983_24523bfe59_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4546/38276496692_8a13ea4a65_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4583/38276512602_fde64bda3d_z.jpg" alt="" width="130" height="111"/>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4546/38276496692_8a13ea4a65_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4450/37076880983_24523bfe59_c.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4583/38276512602_fde64bda3d_z.jpg" alt="" width="130" height="111"/>
                  </div>
                  <div className='col-6 col-md-3'>
                  <img src="https://live.staticflickr.com/4514/23894501678_3db3d98d85_c.jpg" alt="" width="130" height="111"/>
                  </div>
                </div>
               
              </div>              
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer

