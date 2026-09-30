import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        color: '#f3f4f6',
        padding: '2rem 1rem',
        width: '100%',
        marginTop: 'auto'
      }}
    >
      <div
        style={{
          maxWidth: '1800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        {/* Sessão de Links */}
        <nav
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Link href="/" style={{ color: '#0055ff', textDecoration: 'none' }}>
            Início
          </Link>
          <Link href="/sobre" style={{ color: '#0055ff', textDecoration: 'none' }}>
            Sobre
          </Link>
          <a
            href="https://github.com/RickDoidinho1/trabalho-git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0055ff', textDecoration: 'none' }}
          >
            GitHub
          </a>
        </nav>

        {/* Linha Divisória */}
        <div
          style={{
            width: '100%',
            height: '1.5px',
            backgroundColor: '#374151'
          }}
        />

        {/* Direitos Autorais */}
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#33373f' }}>
          © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}