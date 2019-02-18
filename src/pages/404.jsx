import React from 'react';
import Layout from '../templates/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <div className="section content is-centered">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
