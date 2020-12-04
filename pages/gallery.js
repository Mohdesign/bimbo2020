import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'
import Services from '../components/Services'


const gallerys = [
    {    
    thumbnail:"static/images/gallery/img-1.jpg",
    image:"static/images/gallery/1.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-2.jpg",
    image:"static/images/gallery/2.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-3.jpg",
    image:"static/images/gallery/3.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-4.jpg",
    image:"static/images/gallery/4.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-5.jpg",
    image:"static/images/gallery/5.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-6.jpg",
    image:"static/images/gallery/6.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-7.jpg",
    image:"static/images/gallery/7.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-8.jpg",
    image:"static/images/gallery/8.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-9.jpg",
    image:"static/images/gallery/9.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-10.jpg",
    image:"static/images/gallery/10.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-11.jpg",
    image:"static/images/gallery/11.jpg",
    },
    {    
    thumbnail:"static/images/gallery/img-12.jpg",
    image:"static/images/gallery/12.jpg",
    },

];


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function GalleriesList(props) {

  const gallerys = shuffleArray(props.gallerys);

  const Items = gallerys.slice(0, 40).map((gallery) =>
    <>
	    <li className="single-listing-gallery text-center" data-src={gallery.image}>
		  <Link href=""><a>
		    <img className="" src={gallery.thumbnail} alt="" />
		  </a></Link>
		</li>
	</>
  );
  return (
     <>{Items}</> 
  );
}



const Gallery = () => {
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
                                    <h2>Discover Bimbo Daycare</h2>
                                    <p>Our Bathurst location provide an environment where every child feels safe and secure while they're away from home.  A child is more likely to flourish when they feel that all is well in their world.</p>
                                </div>
                            </div>
                        </div>

                        <div className="facility">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="demo-gallery">
                                      <ul id="animated-thumbnials" className="list-unstyled listing-pro-gallery clearfix">

                                        <GalleriesList gallerys={gallerys} />
                                         
                                      </ul>
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


export default Gallery