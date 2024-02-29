import React from 'react';
import './Header.css'; // Assuming your styles are defined here


const Header = () => {
  return (
    <div className='header'>
      {/* Image */}
      <img src="\img\logo.png" id="logo" alt="Logo" />

      {/* Links Div */}
      <div className="links">
        <p>about us</p>
        <p class='dot'>•</p>
        <p>our experts</p>
        <p class='dot'>•</p>
        <p>nutrition</p>
        <p class='dot'>•</p>
        <p>contact</p>
      </div>

      {/* Searchbar Div */}
      <div className="searchbar">
        {/* Implement your search bar here */}
      </div>

      {/* Buttons */}
      <button>Login</button>
      <button>Register</button>
    </div>
  );
};

export default Header;
