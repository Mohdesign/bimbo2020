import Head from "next/head";
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import Bootstrap from 'react-bootstrap';
import AOS from "aos";
import Preloading from './Preloading';
import Header from './Header';
import Footer from './Footer';
import Cta from './Cta';
import Features from './Features';

class Layout extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);

 
        AOS.init();
         
        const menu = $('ul#navigation');
        if(menu.length){
          setTimeout(() => $('ul#navigation').slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
          }), 100);
     
        };

        // activeLink
        $(function(){
            $('nav a').filter(function() {
                return this.href==location.href
            })
            .parent().addClass('active').siblings().removeClass('active')

            $('nav a').click(function(){
                $(this).parent().addClass('active').siblings().removeClass('active')
            })
        });

        // preloading
        $('#preloader-active').delay(550).fadeOut('slow');
        $('body').delay(250).css({
            'overflow': 'visible',
        })  

        //Gallery
        $(function () {
            $("#animated-thumbnials").lightGallery({thumbnail:true});
        });

    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }
 

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Bimbo</title>
                    <meta name="description" content="We believe it is important to provide an environment where every child feels safe and secure while they're away from home. " />
                    
                    <link rel="shortcut icon" href="/static/images/favicon/favicon.ico" type="image/x-icon" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
                     <link rel="apple-touch-icon" sizes="57x57" href="/static/images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/images/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/images/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/images/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/images/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-icon-180x180.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/android-icon-192x192.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/android-icon-144x144.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/android-icon-96x96.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/images/android-icon-72x72.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/android-icon-48x48.png" />
                    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/android-icon-36x36.png" />

                    <link href="/static/css/animate.min.css" rel="stylesheet" />
                    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/static/css/slick.css" rel="stylesheet" />
                    <link href="/static/css/slicknav.css" rel="stylesheet" />
                    <link href="/static/css/style.css" rel="stylesheet" />
                    <link href="/static/css/responsive.css" rel="stylesheet" />
                    <link href="/static/css/lightgallery.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900|Poppins:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap" rel="stylesheet" />
                    <link  href="/static/fonts/fontawesome/css/all.css" rel="stylesheet" />
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />


                </Head>
               {/* <Preloading/> */ }
                <div id="wrapper">
                    <Header/>
                    <main data-aos="fade-in" data-aos-duration="1500">     
                    {this.props.children}
                    </main>
                    <Features/>
                    <Cta/>
                    <Footer/>
                </div>
                 
                <script src="/static/js/jquery-1.12.4.min.js"></script>
                <script src="/static/js/jquery.slicknav.min.js"></script>
                <script src="/static/js/jquery.sticky.js"></script>
                <script src="/static/js/slick.min.js"></script>
                <script src="/static/js/wow.min.js"></script>
                <script src="/static/js/jquery.scrollUp.min.js"></script>
                <script src="/static/js/colors-circles.js"></script>

                <script src="/static/gallery-assets/js/lightgallery.js"></script>
                <script src="/static/gallery-assets/js/lg-thumbnail.js"></script>
                <script src="/static/gallery-assets/lib/jquery.mousewheel.min.js"></script>
                <script src="/static/js/main.js"></script>

                
            </div>
        )
    }
}

export default Layout
