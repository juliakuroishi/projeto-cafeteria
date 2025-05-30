// src/Cardapio.jsx
import React from "react";
// import './Cardapio.css'; // Se você tiver estilos específicos para o cardápio

function Cardapio({ onVoltar }) { // Recebe a função onVoltar como prop
  return (
    <div className="cardapio-container"> {/* Use uma classe para estilização, se necessário */}
      {/* Botão para voltar para a tela inicial */}
      <button onClick={onVoltar} style={{ margin: '20px', padding: '10px 15px', cursor: 'pointer' }}>
        &larr; Voltar à Home 
      </button>
      
      <h1>Nyan Café</h1>
      <hr />
      <section>
        <h2>Bebidas</h2>
        <article className="item">
          <p className="flavor">French Vanilla</p><p className="price">R$ 3,00</p>
        </article>
        <article className="item">
          <p className="flavor">Chocolate quente</p><p className="price">R$ 6,00</p>
        </article>
        
      </section>
      
      <section>
        <h2>Lanches</h2>
        <article className="item">
          <p className="flavor">Pão de queijo</p><p className="price">R$ 5,00</p>
        </article>
        <article className="item">
          <p className="flavor">Misto quente</p><p className="price">R$ 3,00</p>
        </article>
        
      </section>

    </div>
  );
}

export default Cardapio;