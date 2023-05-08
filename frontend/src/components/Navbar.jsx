import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <header>
      <div>
        <Link to='/'>
          <h2>PostsApp</h2>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;