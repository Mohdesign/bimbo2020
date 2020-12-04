
const Features = (props) => (
	<>
	<section className="best-features-area section-padding">
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-lg-12">
                     <div className="row">
                        <div className="col-lg-10 col-md-10">
                            <div className="section-tittle" data-aos="fade-down">
                                <h2>Some of the best features in Bimbo</h2>
                            </div>
                        </div>
                    </div>
                     <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="single-features" data-aos="fade-down">
                                <div className="features-icon">
                                    <span className="flaticon-support">1</span>
                                </div>
                                <div className="features-caption">
                                    <h3>Safe environment </h3>
                                </div>
                            </div>
                         
                            <div className="single-features" data-aos="fade-down">
                                <div className="features-icon">
                                    <span className="flaticon-support">2</span>
                                </div>
                                <div className="features-caption">
                                    <h3>Certified and fully trained staff</h3>
                                </div>
                            </div>
                         
                            <div className="single-features" data-aos="fade-down">
                                <div className="features-icon">
                                    <span className="flaticon-support">3</span>
                                </div>
                                <div className="features-caption">
                                    <h3>Partnership with parents</h3>
                                </div>
                            </div>
                         
                            <div className="single-features" data-aos="fade-down">
                                <div className="features-icon">
                                    <span className="flaticon-support">4</span>
                                </div>
                                <div className="features-caption">
                                    <h3>Outdoor play, and more</h3>
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-6">
                            <img src="/static/images/hero/hero_left.png" className="img-fluid" data-aos="zoom-in" alt="KID" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	</>
)

export default Features