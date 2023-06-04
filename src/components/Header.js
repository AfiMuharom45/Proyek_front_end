import React from 'react';
import './Header.css'; // Import file CSS
import logo from '../image/cumik.jpg'; // Import file gambar logo

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kedai Cumik Logo" className="header__logo" />
      <h1 className="header__title">Kedai Cumik</h1>
    </header>
  );
}

export default Header;
