import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from './layout';
import SEO from '../components/seo';
import Author from '../components/author';
import Hero from '../components/hero';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, subtitle, body, createdAt, authors, excerpt, featuredImage } = data.contentfulPost;
  const content = body ? body.childMarkdownRemark.html : '';
  const description = excerpt ? excerpt.excerpt : '';
  const backgroundImage = featuredImage ? featuredImage.fluid.src : undefined;
  const authorBios = (authors && authors.length)
    ? authors.map(author => (
        <Author
          key={author.id}
          name={author.name}
          photo={author.photo ? author.photo.fixed.src : undefined}
          twitter={author.twitterHandle}
          bio={author.bio ? author.bio.bio : undefined}
        />
      ))
    : null;
  console.log(authors);
  return (
    <Layout>
      <SEO title={title} description={description} />
      <article className="hentry post ">
        <Hero title={title} subtitle={subtitle} backgroundImg={backgroundImage}/>
        <div className="container section">
          <p className="is-uppercase" >
            <small>Published {moment(createdAt).fromNow()}</small>
          </p>
          <hr />
          <div className="columns">
            <div className="column">
              <div className="content entry-content ">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
            <div className="column is-one-third">
              {authors && (
              <div style={{ position: 'sticky', top: '5rem' }}>
                <p className="title is-5 has-text-grey has-text-weight-normal">
                  About the {authors.length > 1 ? 'Authors' : 'Author'}:
                </p>
                {authorBios}
              </div>
              )}
            </div>
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
      excerpt {
        excerpt
      }
      featuredImage {
        id
        fluid(maxWidth: 1920) {
          sizes
          src
          srcSet
        }
      }
      authors {
        id
        name
        twitterHandle
        bio {
          bio
        }
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
