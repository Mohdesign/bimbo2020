import Link from 'next/link'

{/* get the dyear */}
const today = new Date();

const Footer = (props) => (
    <div className="footer-main">
        <div className="footer-area footer-padding">
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-lg-5 col-sm-8">
                         <div className="single-footer-caption mb-30">
                              <div className="footer-logo">
                                 <a href="index.html"><img src="/static/images/logo.svg" width="250" alt="Bimbo Daycare Logo" /></a>
                             </div>
                             <div className="footer-tittle">
                                 <div className="footer-pera">
                                     <p className="info1">We are committed to the families we serve. We combine educational activities, making new friends, outdoor play, and more, to help each child develop their skills for life.</p>
                                </div>
                             </div>
                         </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-5">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Our Facility</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-7">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Other Links</h4>
                                <ul>
                                    <li><a href="#">Programs</a></li>
                                    <li><a href="#">Our Services </a></li>
                                    <li><a href="#">Photo Gallery</a></li>
                                    <li><a href="#">Contact Information</a></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="row align-items-center">
                    <div className="col-xl-12 ">
                        <div className="footer-copy-right">
                           <p> 
                            Copyright &copy;  {today.getFullYear()} All rights reserved by <a href="https://www.websolutions.ca/" target="_blank"><img src="/static/images/websolutions.svg" width="150" alt="Websolutions.ca" /></a>
                                 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
)

export default Footer
