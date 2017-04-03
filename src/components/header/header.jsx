import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav' id='header'>
        <div id='left-half'>
          <h1 id='title'>Film_Web</h1>
        </div>

        <div id='right-half'>
          <div className='nav-link'>
            <Link to={'/'}>Search</Link>
          </div>
          <div>|</div>
          <div className='nav-link'>
            <Link to={'favorites'}>Favorites</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
