import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from './layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, body } = data.contentfulPost;
  const content = body.childMarkdownRemark.html;
  return (
    <Layout>
      <SEO title={title} />
      <article className="hentry post content">
        <header className="hero is-light">
          <div className="container is-fluid">
            <div className="hero-body">
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </header>

        <div className="container">
          <div
            className="entry-content section"
            dangerouslySetInnerHTML={{ __html: content }}
          />
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
