import React from 'react';
import PostsList from '../features/posts/PostsList';

function Home(props) {
  return (
    <div>
      Home Page
      <PostsList />
    </div>
  );
}

export default Home;