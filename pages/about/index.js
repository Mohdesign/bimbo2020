import Head from "next/head"
import Link from 'next/link'
import Layout from '../../components/Layout'
import Services from '../../components/Services'

export default () => (
    <Layout>
        <Head>
            <title>About us</title>
            <meta name="description" content="Elements Page" />
        </Head>

         
        <section className="section-padding sub-page mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                       
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="section-tittle text-center" data-aos="fade-in" data-aos-duration="1500">
                                    <h2>Our History</h2>
                                    <p>As a non-profit daycare, Garderie Bimbo Daycare Inc. provides quality childcare, preschool and after school care to families residing in Bathurst, New Brunswick and the surrounding areas. Children from birth to 12-years-old learn and develop through play.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10  offset-lg-1 my-5 text-center" data-aos="fade-in" data-aos-duration="1500">
                                <img src="static/images/about/kids.png" className="img-fluid"  alt="KID" />
                            </div>
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <h3>Opened in 1975</h3>
                                <p>Opened in 1975, the daycare has an abundance of experience in nurturing our community’s children. Our educators have years of experience, and meet all requirement set out in the provincial daycare standards. We believe that each child is unique and strive to meet the needs of our parents, children and community.</p>
                                <hr/>
                                <h3>Our Vision</h3>
                                <p>We are committed to the families we serve. We combine educational activities, making new friends, outdoor play, and more, to help each child develop their skills for life. Our goal is to provide the children we care for with the best possible learning experiences, while also providing a safe environment. Our staff is always continuing their education to ensure that every child we care for is receiving the highest quality of services. We offer two after school programs, one on-site and one situated at cite de l'amitie.</p>
                                <hr/>
                                <h3>Contact Us</h3>
                                <p>So, if you're looking for a safe, friendly, and caring childcare center, <a href="">contact us today</a>. We would be happy to give you a tour of our facility.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <img src="static/images/about/img-1.jpg" className="img-fluid w-100" data-aos="fade-up" alt="Bimbo" />
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-2 col-lg-3 mx-auto mt-5">
                                <div className="btn-action">
                                    <Link href="/gallery"><a className="btn radius-btn" data-aos="zoom-in">More Photos</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Services />

    </Layout>
)
