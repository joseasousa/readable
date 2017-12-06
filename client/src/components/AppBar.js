import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Readable</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default AppBar;
