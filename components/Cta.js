import Link from 'next/link'

const Cta = (props) => (
	<>
	<section className="say-something-aera section-padding">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <div className="say-something-cap" data-aos="fade-right">
                            <h2>Say Hello To Bimbo Daycare.</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3">
                        <div className="say-btn">
                            <Link href="/contact"><a className="btn radius-btn" data-aos="zoom-in">Contact Us</a></Link>
                        </div>
                    </div>
                </div>
            </div>
             <div className="say-shape">
                <img src="/static/images/cta/say-shape-right.png" data-aos="fade-up" alt="Contact background" className="say-shape2 d-none d-lg-block" />
            </div>
        </section>
	</>
)

export default Cta