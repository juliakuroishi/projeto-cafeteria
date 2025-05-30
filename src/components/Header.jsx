// src/components/Header.jsx
import React from 'react';
import nyanLogo from '../assets/nyanLogo.svg'; // Certifique-se que o caminho está correto

function Header() {
  return (
    <header className="app-header">
      <div className="logo-title-container"> {/* Nova div para agrupar logo e título */}
        <img src={nyanLogo} className="logo" alt="Nyan logo" />
        <h1>Nyan Cafeteria</h1>
      </div>
    
    </header>
  );
}

export default Header;