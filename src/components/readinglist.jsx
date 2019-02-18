import React from 'react';
import PropTypes from 'prop-types';

const ReadingList = ({ posts }) => {
  const rendered = posts.map(post => (
    <article>
        <hr/>
        <p className="title is-6"><a target="_blank" href={post.href}>{post.description}</a></p>
    </article>
  ));
  return (
    <div className="content" style={{ backgroundColor: '#efefef', padding: '3rem 1.5rem'}}>
      <h2 className="title is-uppercase is-5">Reading List</h2>
      <p className="subtitle is-6">Recent articles that caught our attention.</p>
      {rendered}
    </div>
  );
};

ReadingList.propTypes = {
  posts: PropTypes.node,
};

ReadingList.defaultProps = {
  posts: [],
};

export default ReadingList;
