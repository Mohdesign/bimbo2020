import PropTypes from 'prop-types'
import Link from 'next/link'

 
const Menu = (props) => (
    <nav>
        <ul id="navigation">    
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link>
                <ul className="submenu">
                    <li><Link href="/about"><a>History</a></Link></li>
                    <li><Link href="/staff"><a>Key Staff</a></Link></li>
                    <li><Link href="/facility"><a>Our Facility</a></Link></li>
                </ul>
            </li>
            <li><Link href="/services"><a>Our Services / Programs</a></Link></li>
            <li><Link href="/gallery"><a>Gallery</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/"><a>EN | FR</a></Link></li>
        </ul>
    </nav>
)
 
export default Menu
