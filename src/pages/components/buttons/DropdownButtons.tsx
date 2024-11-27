import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faShare, 
  faEnvelope, 
  faPrint, 
  faCloudDownload,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const DropdownButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
    setIsOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Dropdown Buttons</h2>
          
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Dropdown</h5>
            </div>
            <div className="card-body">
              <div className="dropdown">
                <button 
                  className="btn btn-primary dropdown-toggle" 
                  type="button" 
                  onClick={toggleDropdown}
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download
                  <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                </button>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                  <a 
                    className="dropdown-item" 
                    href="#" 
                    onClick={() => handleActionSelect('PDF')}
                  >
                    <FontAwesomeIcon icon={faCloudDownload} className="me-2" />
                    Download PDF
                  </a>
                  <a 
                    className="dropdown-item" 
                    href="#" 
                    onClick={() => handleActionSelect('Excel')}
                  >
                    <FontAwesomeIcon icon={faCloudDownload} className="me-2" />
                    Download Excel
                  </a>
                  <div className="dropdown-divider"></div>
                  <a 
                    className="dropdown-item" 
                    href="#" 
                    onClick={() => handleActionSelect('All')}
                  >
                    <FontAwesomeIcon icon={faCloudDownload} className="me-2" />
                    Download All
                  </a>
                </div>
              </div>
              {selectedAction && (
                <p className="mt-3 text-muted">
                  Last selected action: {selectedAction}
                </p>
              )}
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Split Dropdown</h5>
            </div>
            <div className="card-body">
              <div className="btn-group">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faShare} className="me-2" />
                  Share
                </button>
                <button 
                  type="button" 
                  className="btn btn-success dropdown-toggle dropdown-toggle-split"
                  onClick={toggleDropdown}
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                  <a className="dropdown-item" href="#">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Email
                  </a>
                  <a className="dropdown-item" href="#">
                    <FontAwesomeIcon icon={faPrint} className="me-2" />
                    Print
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Colored Dropdowns</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-3">
                <div className="dropdown">
                  <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button"
                  >
                    Primary Dropdown
                    <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                  </button>
                </div>
                <div className="dropdown">
                  <button 
                    className="btn btn-success dropdown-toggle" 
                    type="button"
                  >
                    Success Dropdown
                    <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                  </button>
                </div>
                <div className="dropdown">
                  <button 
                    className="btn btn-danger dropdown-toggle" 
                    type="button"
                  >
                    Danger Dropdown
                    <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownButtons;
