// src/Login.jsx
import React from 'react';
// import './Login.css'; // Crie este arquivo se quiser estilos específicos para o login

function Login({ onVoltar }) { // onVoltar para voltar à página inicial

  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você adicionaria a lógica de autenticação (verificar usuário e senha)
    // Por enquanto, vamos apenas simular:
    alert('Botão de login clicado! Funcionalidade de autenticação a ser implementada.');
    // Após o login bem-sucedido, você poderia redirecionar o usuário
    // ou chamar uma função passada por props para atualizar o estado no App.jsx
  };

  return (
    <div className="login-page-container" style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={onVoltar} 
        style={{ 
          display: 'block', 
          margin: '0 auto 20px auto', 
          padding: '10px 15px', 
          cursor: 'pointer',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      >
        &larr; Voltar à Home
      </button>
      
      <h2>Acessar Dados / Login</h2>
      <form onSubmit={handleLoginSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Senha:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button 
          type="submit" 
          className="action-button" // Pode usar a mesma classe do botão da home
          style={{ width: '100%', padding: '10px 15px' }} // Ajuste o estilo se necessário
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;