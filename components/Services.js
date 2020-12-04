
import Link from 'next/link'

const services = [
    {    
    title: "Group activities",
    image:"static/images/hero/camera-big.png",
    description:"that will help children learn how to interact with other children, how to share, and have fun!."
    },
    
    {    
    title: "Education",
    image:"static/images/hero/clock-big.png",
    description:"about the world around them. At Garderie Bimbo Daycare, we provide an environment that allows children to learn by manipulation, exploring and testing the environment around them."
    },

    {    
    title: "Physical exercise",
    image:"static/images/hero/education-big.png",
    description:"Physical exercise through activities that are designed to strengthen hand-eye coordination, balance, focus and cardiovascular endurance. 👋"
    },

    {    
    title: "Communication skills",
    image:"static/images/hero/chatbox-big.png",
    description:"Communication skills that are vital in our daycare. Our staff is quite good in bringing out the art of interaction from each child. We allow children to open up naturally under loving guidelines to help boost their confidence and help them be well-rounded in their school and in their community."
    },

    {    
    title: "Nutrition",
    image:"static/images/hero/apple.png",
    description:"Nutrition that is essential to every young child. Our meals are prepared with care by an onsite cook in a clean and responsible kitchen that every parent can feel good about. We follow the Canada food guide in order to provide balanced meals and snacks that are healthy. We believe that good nutrition is vital to nurturing healthy children."
    },

    {    
    title: "Let's Get in Touch",
    image:"static/images/hero/phone.png",
    description:"For more information about our daycare or preschool services contact us today, and feel free to call us at 506-548-8069 today!"
    },

];
 

function ServicesList(props) {

  const services = props.services;

  const Items = services.slice(0, 4).map((item) =>
    <>
    <div class="quality__col">
        <div class="quality__item" data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          <div class="quality__icon"><img class="quality__pic" src={item.image} alt="Camera" /></div>
          <div class="quality__details">
            <div class="quality__category">{item.title}</div>
            <div class="quality__text">{item.description}</div>
           </div>
        </div>
     </div>
    </>
  );
  return (
     <>{Items}</> 
  );
}

const Services = () => {
	return (

		<section>
      <div class="col-md-12-">

        <div class="quality">
            <div class="quality__body">

              <ServicesList services={services} />
               
            </div>
            <div class="quality__circles" >
              <div class="quality__circle" data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-delay="1200"> </div>
              <div class="quality__circle"> </div>
            </div>
            
            <div class="row justify-content-between align-items-center">
                <div class="btn-action mx-auto mt-5">
                    <Link href="/services"><a class="btn radius-btn" data-aos="zoom-in">View All Services</a></Link>
                </div>
            </div>
        </div>
      </div>
  </section>
	)
}


export default Services