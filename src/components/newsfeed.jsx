import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import moment from 'moment';


const Newsfeed = ({ posts }) => {
  const rendered = posts.map(post => (
    <div
      key={post.id}
      className="columns "
      style={{ marginTop: '2rem', marginBottom: '2rem' }}
    >
      <div className="column is-half">
        <div
          style={{
            width: '100%',
            height: '0',
            paddingBottom: '58%',
            position: 'relative',
            marginBottom: '30px',
          }}
        >
          <Link to={post.path}>
            <Img
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
              }}
              sizes={post.image}
            />
          </Link>
        </div>
      </div>
      <div className="column">
        <h2 className="title is-4">
          <Link to={post.path}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <time
          datetime={moment(post.date).format()}
          className="is-6 is-subtle"
        >
          {moment(post.date).fromNow()}
        </time>
      </div>
    </div>
  ));

  return (
    <>
      {rendered}
    </>
  )
};

export default Newsfeed;
