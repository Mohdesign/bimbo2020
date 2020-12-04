import PropTypes from 'prop-types';
import Link from 'next/link';
import Menu from './Menu';

const Header = (props) => (
    <header>
        <div className="header-area header-transparrent">
            <div className="main-header header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                         <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="logo">
                            <Link href="/"><a><img src="/static/images/logo.svg" width="180" alt="Bimbo Daycare Logo"/></a></Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                             <div className="main-menu f-right d-none d-lg-block">
                               <Menu />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </header>
)

 
export default Header
