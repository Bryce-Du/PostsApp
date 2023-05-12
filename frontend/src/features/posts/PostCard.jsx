import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../api/postSlice';
import './PostCard.css';

function PostCard(props) {
  const { title, body, id } = props;
  const dispatch = useDispatch()

  const handleDelete = (event) => {
    event.preventDefault()
    console.log(id)
    dispatch(deletePost(id))
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <button onClick={handleDelete}>Delete Post</button>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default PostCard;