import React from 'react';
import PropTypes from 'prop-types';
import { TwitterFollowButton } from 'react-twitter-embed';

const propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  twitter: PropTypes.string,
  bio: PropTypes.string,
};
const defaultProps = {
  photo: null,
  twitter: null,
  bio: null,
};

function Author({ name, photo, twitter, bio }) {
  return (
    <aside className="box has-background-light">
      <div className="is-vcentered " style={{display: 'flex', flex: '0 128px', justifyContent: 'space-between'}}>
        <div className="">
          <h2 className="title is-5 is-uppercase">{name}</h2>
          {twitter && <TwitterFollowButton options={{showCount:false, size: 'large'}} large screenName={twitter} />}
        </div>
        {photo && (
          <div className="">
            <figure className="image is-128x128">
              <img className="is-rounded " src={photo} />
            </figure>
          </div>
        )}
      </div>
      <p>{bio}</p>
    </aside>
  );
}

export default Author;
