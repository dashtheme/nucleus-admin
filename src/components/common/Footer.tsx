import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-white border-top py-3 mt-auto">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted small mb-0"> {currentYear} DashbTheme. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/privacy" className="text-muted small me-3 text-decoration-none">Privacy Policy</Link>
            <Link to="/terms" className="text-muted small text-decoration-none">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
