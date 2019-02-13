import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from './layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, subtitle, body, createdAt } = data.contentfulPost;
  const content = (body) ? body.childMarkdownRemark.html : '';
  return (
    <Layout>
      <SEO title={title} />
      <article className="hentry post content">
        <header className="hero is-light">
          <div className="container ">
            <div className="hero-body" style={{ maxWidth: '900px' }}>
              <h1 className="title">{title}</h1>
              {subtitle && <p className="subtitle ">{subtitle}</p>}
            </div>
          </div>
        </header>

        <div className="container">
          <div className="entry-content section">
            <p className="is-uppercase"><small>Published {moment(createdAt).fromNow()}</small></p>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      createdAt
      body {
        childMarkdownRemark {
          html
        }
      }
      authors {
        id
        name
        twitterHandle
        photo {
          id
          fixed {
            src
          }
        }
      }
    }
  }
`;
