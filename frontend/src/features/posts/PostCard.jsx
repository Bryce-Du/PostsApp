import React from 'react';
import './PostCard.css';

function PostCard(props) {
  const { title, body } = props;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default PostCard;