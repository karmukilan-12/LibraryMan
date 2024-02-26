import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';



const HomePage = () => {
  return (
    <div>
      <div className='base'><h1>Welcome to KarLibrary. </h1></div>
    <div className="home">
      
      <h2>Select Login Type</h2>
      <div className="buttons">
        <Link to="/admin">
          <button className="inventory-btn">Admin Login</button>
        </Link>
        <Link to="/user">
          <button className="delivery-btn">User Login</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
