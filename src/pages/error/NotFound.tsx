import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faArrowLeft, 
  faSearch,
  faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #ff9f43 100%)',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    padding: '3rem 2rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  };

  const errorCodeStyle: React.CSSProperties = {
    fontSize: '6rem',
    fontWeight: 700,
    color: '#2193b0',
    lineHeight: 1,
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#1a1d21',
  };

  const descriptionStyle: React.CSSProperties = {
    color: '#6c757d',
    marginBottom: '2rem',
    fontSize: '1.1rem',
    lineHeight: 1.5,
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#2193b0',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#ffffff',
    color: '#2193b0',
    border: '2px solid #2193b0',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '1.1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={{ marginBottom: '2rem' }}>
          <FontAwesomeIcon 
            icon={faExclamationTriangle} 
            style={{ fontSize: '3rem', color: '#ffc107', marginBottom: '1rem' }} 
          />
        </div>
        <div style={errorCodeStyle}>404</div>
        <h1 style={headingStyle}>Page Not Found</h1>
        <p style={descriptionStyle}>
          Oops! The page you're looking for seems to have wandered off into the quantum realm. 
          Let's help you find your way back.
        </p>
        <div style={buttonContainerStyle}>
          <button 
            onClick={() => navigate(-1)} 
            style={secondaryButtonStyle}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={iconStyle} />
            Go Back
          </button>
          <Link to="/" style={primaryButtonStyle}>
            <FontAwesomeIcon icon={faHome} style={iconStyle} />
            Return Home
          </Link>
          <Link to="/dashboard/main" style={secondaryButtonStyle}>
            <FontAwesomeIcon icon={faSearch} style={iconStyle} />
            Browse Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
