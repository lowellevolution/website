import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { TwitterFollowButton } from 'react-twitter-embed';
import moment from 'moment';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata;
      return (
        <footer
          className="footer center "
          style={{ padding: '6rem 1.5rem 3rem' }}
        >
          <div className="container content is-narrow">
            <p className="has-text-size-small is-size-7-desktop has-text-centered">
              &copy; {moment().year()} {title}, all rights reserved.
            </p>
            <div className="has-text-centered">
              <TwitterFollowButton screenName="lowellevolution" />
            </div>
          </div>
        </footer>
      );
    }}
  />
);

export default Footer;
