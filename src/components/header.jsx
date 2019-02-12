import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo-white.svg';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
    };
  }

  render() {
    const { navActive } = this.state;
    return (
      <nav
        className="navbar is-info is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        // style={{ borderBottom: '1px solid #efefef' }}
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="Lowell Evolution logo" style={{ width: 'auto', height: '21px' }} />
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              onClick={() => {
                this.setState({ navActive: !navActive });
              }}
              href="/"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className={navActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end is-uppercase has-text-weight-semibold	">
              {/* <Link to="/about" className="navbar-item">
                About
              </Link> */}


              <a href="https://twitter.com/lowellevolution" className="navbar-item">
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/lowellevolution"
                className="navbar-item"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
