import PropTypes from 'prop-types'

const Preloading = (props) => (
	<div id="preloader-active">
	    <div className="preloader d-flex align-items-center justify-content-center">
	        <div className="preloader-inner position-relative">
	            <div className="preloader-circle"></div>
	            <div className="preloader-img pere-text">
	                <img src="/static/images/logo.svg" width="150" alt="Bimbo Daycare Logo" />
	            </div>
	        </div>
	    </div>
	</div>
)

export default Preloading