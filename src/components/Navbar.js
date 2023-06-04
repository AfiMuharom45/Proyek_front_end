import React from 'react';
import './Navbar.css'; // Import file CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="/">Home</a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/home">Tambah Makanan</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
