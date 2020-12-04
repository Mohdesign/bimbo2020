import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'
import AllServices from '../components/AllServices'

const Services = () => {
	return (
	<Layout>
		<Head>
            <title>Services</title>
            <meta name="description" content="Elements Page" />
        </Head>
        <section class="section-padding sub-page mt-5">
	        <div class="container">
	            <div class="row justify-content-center">
	                <div class="col-lg-12">
 	                    <div class="row">
	                        <div class="col-12 col-lg-10 offset-lg-1">
	                            <div class="section-tittle text-center">
	                              <h2>Our Services / Programs</h2>
	                              <p>At Garderie Bimbo Daycare Inc., your child will feel comfortable and relaxed while under our supervision. We believe it is important to provide an environment where every child feels safe and secure while they're away from home. A child is more likely to flourish when they feel that all is well in their world.</p>
	                              <p>The certified and fully trained staff at Garderie Bimbo Daycare serve as authority figures who will gently guide and instruct your child through each daily event, providing encouragement and support. </p>
	                              <h4>When in our care your child will be provided with:</h4>
	                            </div>
	                        </div>
	                    </div>

	                   
	                </div>
	            </div>
	        </div>
	        <AllServices />
	    </section>
	     

	</ Layout>
  )
}


export default Services