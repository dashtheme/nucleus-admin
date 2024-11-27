import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed = false }) => {
  return (
    <Link 
      to="/" 
      className="text-decoration-none d-flex align-items-center"
      style={{ gap: '0.5rem' }}
    >
      <div 
        className="d-flex align-items-center justify-content-center"
        style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #ff9f43 0%, #ff9a9e 100%)',
          borderRadius: '8px',
          color: 'white',
          fontSize: collapsed ? '1rem' : '1.25rem',
          fontWeight: 'bold'
        }}
      >
        N
      </div>
      {!collapsed && (
        <span className="fw-bold text-dark" style={{ fontSize: '1.25rem' }}>
          Nucleus<span style={{ color: '#ff9f43' }}>Admin</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
