import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from './PostCard'
// import PostForm from './PostForm';
import { getPosts } from '../../api/postSlice'

function PostsList() {
  const { posts, status } = useSelector((store) => store.posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  if (!posts) {
    return <p>no posts were found</p>
  }

  return (
    <div>
      {/* <PostForm /> */}
      <h1>Posts List</h1>
      {posts.map(post => (
        <PostCard key={post._id} title={post.title} body={post.body} />
      ))}
    </div>

  );
}

export default PostsList;