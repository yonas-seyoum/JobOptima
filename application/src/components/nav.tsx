import * as React from 'react';
import "../styles/nav.css"


export default function Nav() {
  return (
    <div id='navigation'>
      <div className='bar'>
        <div className='logo'>logo</div>
        <div className='menus'>
          <div className='menu'>Home</div>
          <div className='menu'>Explore</div>
          <div className='menu'>About Us</div>
          <div className='menu'>Contact Us</div>
        </div>
        <div className='auth'>
          <div>Sign In</div>
        </div>
      </div>
    </div>
  );
}
