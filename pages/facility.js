import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'
import Services from '../components/Services'

const Facility = () => {
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
                                <div className="section-tittle text-center">
                                    <h2>Our Facility</h2>
                                    <p>Our Bathurst location provide an environment where every child feels safe and secure while they're away from home.  A child is more likely to flourish when they feel that all is well in their world.</p>
                                </div>
                            </div>
                        </div>

                        <div className="facility">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img src="static/images/about/img-4.jpg" className="img-fluid w-100" data-aos="fade-up" alt="Bimbo" />
                                    <img src="static/images/about/img-3.jpg" className="img-fluid w-100" data-aos="fade-up" alt="Bimbo" />
                                    <img src="static/images/about/img-2.jpg" className="img-fluid w-100" data-aos="fade-up" alt="Bimbo" />
                                    <img src="static/images/about/img-1.jpg" className="img-fluid w-100" data-aos="fade-up" alt="Bimbo" />
                                </div>
                            </div>
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-2 col-lg-3 mx-auto mt-5">
                                    <div className="btn-action">
                                        <Link  href="/gallery"><a className="btn radius-btn" data-aos="zoom-in">More Photos</a></Link>
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


export default Facility