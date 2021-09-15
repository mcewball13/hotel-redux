import React from 'react';
import {Link} from 'react-router-dom';
import Nav from "../Nav"

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <h1>Hotel Redux</h1>
      
        <nav className="text-center">
          <Nav></Nav>

        </nav>
      </div>
    </header>
  );
};

export default Header;
