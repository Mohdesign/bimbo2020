import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'
import Services from '../components/Services'

const Staff = () => {
	return (
	<Layout>
		<Head>
            <title>Staff</title>
            <meta name="description" content="Elements Page" />
        </Head>

	    <section className="section-padding sub-page mt-5">
	        <div className="container">
	            <div className="row justify-content-center">
	                <div className="col-lg-12">
	                    <div className="row">
	                        <div className="col-12 col-lg-10 offset-lg-1">
	                            <div className="section-tittle text-center" data-aos="fade-in" data-aos-duration="1500">
	                                <h2>Our Key Staff</h2>
	                                <p>The certified and fully trained staff at Garderie Bimbo Daycare serve as authority figures who will gently guide and instruct your child through each daily event, providing encouragement and support. </p>
	                            </div>
	                        </div>
	                    </div>

	                    <div className="keystaff" data-aos="fade-in" data-aos-duration="1500">
	                        <div className="row">
	                            <div className="col-md-4">
	                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
	                                  <div className="member-info">
	                                    <img alt="" src="../static/images/about/staff-placeholder-2.png" />
	                                    <h3>Rachel Landry</h3>
	                                    <p>Director</p>
	                                    
	                                    <p> <a href="mailto:info@bimbodaycare.ca"><span>info@bimbodaycare.ca</span></a></p>
	                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
	                                  </div>
	                                </div>
	                            </div>

	                            <div className="col-md-4">
	                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
	                                  <div className="member-info">
	                                    <img alt="" src="../static/images/about/staff-placeholder-1.png" />
	                                    <h3>Kyle Wilcox</h3>
	                                    <p>General Director</p>
	                                    
	                                    <p> <a href="mailto:info@bimbodaycare.ca"><span>info@bimbodaycare.ca</span></a></p>
	                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
	                                  </div>
	                                </div>
	                            </div>

	                            <div className="col-md-4">
	                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
	                                  <div className="member-info">
	                                    <img alt="" src="../static/images/about/staff-placeholder-3.png" />
	                                    <h3>Kamila Banks</h3>
	                                    <p>CEO</p>
	                                    
	                                    <p> <a href="mailto:info@bimbodaycare.ca"><span>info@bimbodaycare.ca</span></a></p>
	                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
	                                  </div>
	                                </div>
	                            </div>

	                            <div className="col-md-4">
	                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
	                                  <div className="member-info">
	                                    <img alt="" src="../static/images/about/staff-placeholder-4.png" />
	                                    <h3>Kobe Searle</h3>
	                                    <p>Director</p>
	                                    
	                                    <p> <a href="mailto:info@bimbodaycare.ca"><span>info@bimbodaycare.ca</span></a></p>
	                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
	                                  </div>
	                                </div>
	                            </div>

	                        </div>
	                    </div>

	                     
	                </div>
	            </div>
	        </div>
	    </section>

	    <Services />

	    </ Layout>
	)
}


export default Staff