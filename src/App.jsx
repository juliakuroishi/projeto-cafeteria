// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header'; 
import Cardapio from './components/Cardáprio';     
import './App.css'; 

function App() {
  const [mostrarCardapio, setMostrarCardapio] = useState(false);

  // Função para mostrar o cardápio
  const handleAcessarCardapio = () => {
    setMostrarCardapio(true);
  };

  // Função para voltar para a home 
  const handleVoltarHome = () => {
    setMostrarCardapio(false);
  };

  // Se mostrarCardapio for true, renderiza o componente Cardapio
  if (mostrarCardapio) {
    return <Cardapio onVoltar={handleVoltarHome} />;
  }

  // Caso contrário, renderiza a tela inicial
  return (
    <div className="app-page-container"> 
      
      <div className="main-content-area"> {/* Conteúdo central da página */}
        <Header />
        <section className="business-description" style={{ margin: '20px 0' }}>
          <p>Bem-vindo à nossa cafeteria, nyan :3</p>
        </section>
        <section className="action-button-section">
          <button onClick={handleAcessarCardapio} className="action-button">
            Acessar cardápio
          </button>
        </section>
        
      </div>
    
    </div>
  );
}

export default App;