import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from './layout';

export default function Template({
  posts, // this prop will be injected by the GraphQL query below.
}) {
  const renderedPosts = posts.map(post => <h1>{post.id}</h1>)
  console.log(posts);
  return (
    <Layout>
      {renderedPosts}
    </Layout>
  );
}
