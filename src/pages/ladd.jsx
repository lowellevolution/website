import React from 'react';
import { graphql } from 'gatsby';
// import ReactCompareImage from 'react-compare-image';
import ReactCompareImage from 'react-compare-image';

import Layout from '../templates/layout';
import SEO from '../components/seo';

const Ladd = ({data}) => {
  const rightImage = data.rightImage.childImageSharp.fixed.src;
  const leftImage = data.leftImage.childImageSharp.fixed.src;

  console.log(rightImage);
  return (
    <>
    <Layout>
      <SEO title="testing" description="testing" />
      <div className="">
        <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />;
        {/* <ReactCompareImage leftImage="/images/current.png" rightImage="/images/new.png" /> */}
      </div>
    </Layout>
    </>
  );
};

export const query = graphql`
  query {
    rightImage: file(relativePath: { eq: "new.png" }) {
    	childImageSharp {
        fixed(width: 2000) {
          src
        }
        original {
          src
        }
    	}
    }
    leftImage: file(relativePath: { eq: "old.jpg" }) {
    	childImageSharp {
        fixed(width: 2000) {
          src
        }
        original {
          src
        }
    	}
    }
  }
`

export default Ladd;
