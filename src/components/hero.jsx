import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, backgroundImg }) => {
  const headerClass = backgroundImg
    ? 'hero is-medium is-light'
    : 'hero is-light hero-background-image';
  return (
    <header
      className={headerClass}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="container ">
        <div className="hero-body" />
        <div className="notification" style={{ maxWidth: '900px' }}>
          <h1 className="title has-text-white">{title}</h1>
          {subtitle && <p className="subtitle ">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImg: PropTypes.string,
};

Hero.defaultProps = {
  subtitle: '',
  backgroundImg: null,
};

export default Hero;
