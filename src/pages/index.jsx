import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import { graphql } from 'gatsby';
import { FaCheckSquare as Signup } from 'react-icons/fa';

import Layout from '../templates/layout';
import Newsfeed from '../components/newsfeed';
// import Timeline from '../components/timeline';
import SEO from '../components/seo';
import ReadingList from '../components/readinglist';

const IndexPage = ({ data }) => {
  const contentful = data.posts.edges;
  const pinboard = data.readinglist.edges;

  const posts = contentful.map(({ node }) => {
    return {
      id: node.id,
      title: node.title,
      slug: node.slug,
      date: node.publishDate,
      excerpt: node.excerpt ? node.excerpt.excerpt : undefined,
    };
  });

  const readinglist = pinboard.map(({ node }) => {
    return {
      id: node.id,
      href: node.href,
      description: node.description,
      date: node.time,
    };
  });

  return (
    <Layout>
      <SEO
        // title="Lowell Evolution"
        // image={cover.childImageSharp.fixed.src}
        description="Something"
      />

      <div className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <div
              className=" is-size-3 "
              style={{ maxWidth: '1000px', marginBottom: '3rem' }}
            >
              <p>Promote thriving walkable neighborhoods.</p>
              <p>Invest in innovative public education.</p>
              <p>Build on top of what makes Lowell unique.</p>
              <h1 className="title is-2">Move Lowell forward.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" has-background-light">
        <div className="container">
          <section className="section lede">
            <p>
              We're proud of Lowell. We love its history, we're active
              participants in public discussions, and we care deeply about where
              Lowell is going. We believe that citizens can and should be
              enthusiastic partners in how Lowell grows and evolves. Will you
              join us?
            </p>
          </section>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns is-8">
            <div className="column">
              <h2 className="title is-2">Latest Updates</h2>
              <Newsfeed posts={posts} />
            </div>

            <div className="column is-one-third">
              <ReadingList posts={readinglist} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allContentfulPost(
      sort: { fields: publishDate, order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt {
            excerpt
          }
          publishDate
        }
      }
    }
    readinglist: allPinboardBookmark(
      limit: 10
      sort: { fields: time, order: DESC }
    ) {
      edges {
        node {
          id
          href
          description
          time
          tags
        }
      }
    }
  }
`;

export default IndexPage;
