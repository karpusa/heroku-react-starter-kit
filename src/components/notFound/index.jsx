import React from 'react';
import { Link } from 'react-router-dom';

const notFoundpage = () => {
  return (
    <div>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <Link to='/'>To homepage</Link>
    </div>
  );
};

export default notFoundpage;
