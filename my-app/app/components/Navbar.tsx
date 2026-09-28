'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Alternar tema Claro / Escuro
  useEffect(() => {
    if (temaEscuro) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [temaEscuro]);

  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          backgroundColor: temaEscuro ? '#1e1e1e' : '#f4f4f4',
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'background-color 0.3s'
        }}
      >
        {/* Esquerda: Botão Menu */}
        <div>
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: '1px solid currentColor',
              color: 'inherit',
              borderRadius: '4px'
            }}
          >
            ☰ Menu
          </button>
        </div>

        {/* Centro: Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            MINHA LOGO
          </Link>
        </div>

        {/* Direita: Botão de Mudar Cor da Página */}
        <div>
          <button
            onClick={() => setTemaEscuro(!temaEscuro)}
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              cursor: 'pointer',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: temaEscuro ? '#ffd700' : '#333',
              color: temaEscuro ? '#000' : '#fff',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            {temaEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </div>
      </header>

      {/* Menu Lateral (Drawer) */}
      {menuAberto && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 200
          }}
          onClick={() => setMenuAberto(false)}
        >
          <div
            style={{
              width: '250px',
              height: '100%',
              backgroundColor: temaEscuro ? '#222' : '#fff',
              color: temaEscuro ? '#fff' : '#000',
              padding: '2rem 1rem',
              boxShadow: '2px 0 10px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            onClick={(e) => e.stopPropagation()} // Impede que feche ao clicar dentro
          >
            <button
              onClick={() => setMenuAberto(false)}
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'inherit'
              }}
            >
              ✕
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link
                href="/"
                onClick={() => setMenuAberto(false)}
                style={{
                  fontSize: '18px',
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: '500'
                }}
              >
                🏠 Início
              </Link>
              <Link
                href="/sobre"
                onClick={() => setMenuAberto(false)}
                style={{
                  fontSize: '18px',
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: '500'
                }}
              >
                ℹ️ Sobre
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}