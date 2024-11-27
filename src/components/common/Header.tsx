import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faUser, 
  faMoon, 
  faBars, 
  faGear, 
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { images } from '../../constants/images';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <header className="header bg-white border-bottom sticky-top">
      <div className="container-fluid px-3">
        <div className="row align-items-center" style={{ height: '60px' }}>
          {/* Left side - Logo and Hamburger menu */}
          <div className="col d-flex align-items-center">
            <button 
              className="btn p-2 d-flex align-items-center" 
              onClick={onToggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} className="text-muted fs-5" />
            </button>
            <div className="ms-2">
              <Logo />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="col d-flex align-items-center justify-content-end">
            {/* Theme Toggle */}
            <button className="btn btn-link text-dark p-2">
              <FontAwesomeIcon icon={faMoon} />
            </button>

            {/* Notifications */}
            <div className="position-relative mx-2">
              <button className="btn btn-link text-dark p-2">
                <FontAwesomeIcon icon={faBell} />
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.65rem', padding: '0.2rem 0.4rem' }}
                >
                  3
                </span>
              </button>
            </div>

            {/* User Menu */}
            <div className="dropdown me-3">
              <button
                className="btn p-0 d-flex align-items-center"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                <div className="d-none d-sm-block me-2 ms-4">
                  <div className="text-dark fw-medium" style={{ lineHeight: '1.2' }}>John Doe</div>
                  <div className="text-muted small">Administrator</div>
                </div>
                <Link to="/profile" className="d-flex align-items-center text-decoration-none">
                  <img 
                    src={images.profileAvatar} 
                    width="48" 
                    height="48" 
                    alt="John Doe" 
                    className="img-fluid rounded-circle"
                  />
                </Link>
              </button>
              <div 
                className={`dropdown-menu dropdown-menu-end shadow border mt-2 ${showUserDropdown ? 'show' : ''}`}
                style={{ minWidth: '240px', right: '0' }}
              >
                <div className="p-3 border-bottom">
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center me-3"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <img 
                        src={images.profileAvatar} 
                        width={48}
                        height={48}
                        alt="John Doe"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <div className="fw-semibold mb-1">John Doe</div>
                      <div className="text-muted small">john.doe@example.com</div>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Link to="/profile" className="dropdown-item px-4 py-2">
                    <FontAwesomeIcon icon={faUser} className="me-2 text-muted" />
                    Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item px-4 py-2">
                    <FontAwesomeIcon icon={faGear} className="me-2 text-muted" />
                    Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/logout" className="dropdown-item px-4 py-2 text-danger">
                    <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
