import React from 'react';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
import moment from 'moment';

const Newsfeed = ({ posts }) => {
  const rendered = posts.map(post => (
    <div
      key={post.id}
      className="columns "
      style={{ marginTop: '2rem', marginBottom: '2rem' }}
    >
      <div className="column">
        <h2 className="title is-3">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        {/* <p>{post.excerpt}</p> */}
        <time datetime={moment(post.date).format()} className="is-6 is-subtle">
          {moment(post.date).fromNow()}
        </time>
      </div>
      <div className="column is-one-third">
        <div
          style={{
            width: '100%',
            height: '0',
            paddingBottom: '58%',
            position: 'relative',
            marginBottom: '30px',
            overflow: 'hidden',
          }}
        >
          <Link to={post.slug}>
            <img
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
              }}
              // sizes={post.image}
              src="http://source.unsplash.com/kX2DpAj1k20/800x600"
            />
          </Link>
        </div>
      </div>
    </div>
  ));

  return <>{rendered}</>;
};

export default Newsfeed;
