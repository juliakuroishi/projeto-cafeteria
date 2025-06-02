// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header'; // Ajuste o caminho se necessário
import Cardapio from './Cardapio';       // Ajuste o caminho se necessário (se for manter)
import Login from './Login';           // Importe o novo componente Login
// import gatinhoEsquerda from './assets/gatinho_esquerda.png';
// import gatinhoDireita from './assets/gatinho_direita.png';
import './App.css';

function App() {
  // Estado para controlar a página atual: 'home', 'login', 'cardapio'
  const [paginaAtual, setPaginaAtual] = useState('home');

  // Funções para navegar
  const irParaLogin = () => {
    setPaginaAtual('login');
  };

  const irParaCardapio = () => { // Se você quiser ter um botão para o cardápio em outro lugar
    setPaginaAtual('cardapio');
  };

  const voltarParaHome = () => {
    setPaginaAtual('home');
  };

  // Renderização condicional baseada no estado paginaAtual
  if (paginaAtual === 'login') {
    return <Login onVoltar={voltarParaHome} />;
  }

  if (paginaAtual === 'cardapio') {
    return <Cardapio onVoltar={voltarParaHome} />;
  }

  // Renderiza a página Home por padrão
  return (
    <div className="app-page-container">
      {/* <img src={gatinhoEsquerda} alt="Gatinho à esquerda" className="side-image left-image" /> */}
      
      <div className="main-content-area">
        <Header />
        <section className="business-description" style={{ margin: '20px 0' }}>
          <p>Bem-vindo à nossa cafeteria, nyan :3</p>
        </section>
        <section className="action-button-section">
          {/* Botão principal agora leva para o Login */}
          <button onClick={irParaLogin} className="action-button">
            Acessar Dados
          </button>
          
          {/* Exemplo: Se você ainda quiser um botão para o cardápio em algum lugar */}
          {/* <button onClick={irParaCardapio} style={{marginTop: '10px'}}>Ver Cardápio</button> */}
        </section>
      </div>
      
      {/* <img src={gatinhoDireita} alt="Gatinho à direita" className="side-image right-image" /> */}
    </div>
  );
}

export default App;