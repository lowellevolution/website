import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.scss';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

require('typeface-aleo');
require('typeface-montserrat')

const propTypes = {
	children: PropTypes.node,
}

const defaultProps = {
	children: null,
}

const Layout = ({ children }) => (
	<div>
		<SEO />
		<Header />
		<div className=" thorax" style={{minHeight: '80vh', paddingTop: '4rem'}}>

			{children}
		</div>
		<Footer />
	</div>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
