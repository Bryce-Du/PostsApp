import React, { useState } from 'react';
import './PostCard.css';
import { addPost } from '../../api/postSlice';
import { useDispatch } from 'react-redux';

function PostForm(props) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addPost(formData))
    setFormData({})
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Create New Post</h2>
      </div>
      <form style={{ borderWidth: 0 }} onSubmit={handleSubmit}>
        <div className="card-body">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title ?? ''}
            onChange={handleChange}
          />
        </div>
        <div className="card-body">
          <label htmlFor="body">Body </label>
          <textarea
            id="body"
            name="body"
            value={formData.body ?? ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default PostForm;