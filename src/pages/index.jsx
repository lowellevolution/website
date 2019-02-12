import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import { graphql } from 'gatsby';
import { FaCheckSquare as Signup } from 'react-icons/fa';


import Layout from '../templates/layout';
import Newsfeed from '../components/newsfeed';
// import Timeline from '../components/timeline';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      id: node.id,
      title: node.frontmatter.title,
      path: node.frontmatter.path,
      date: node.frontmatter.date,
      excerpt: node.frontmatter.description || node.excerpt,
    };
  });
  return (
    <Layout>
      <SEO
        // title="Lowell Evolution"
        // image={cover.childImageSharp.fixed.src}
        description="Something"
      />

      <div className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className=" is-size-3 has-text-grey-dark" style={{maxWidth: '1000px', marginBottom: '3rem'}}>
              <p>Build thriving neighborhoods.</p>
              <p>Invest in public education.</p>
              <p>Focus on what makes us unique.</p>
              <h1 className="title is-2">We have Lowell pride, and we're going to fight for a smarter, stronger city.</h1>
            </div>
            <div>
              <button type="button" className="button is-outlined is-large is-info"><span style={{marginRight: '5px'}} className="icon is-small"><Signup/></span>Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            description
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
