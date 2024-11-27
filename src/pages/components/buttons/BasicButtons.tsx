import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faSave, 
  faDownload, 
  faShare 
} from '@fortawesome/free-solid-svg-icons';

const BasicButtons: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Basic Buttons</h2>
          
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Button Styles</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                {/* Primary Buttons */}
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Primary Button
                </button>
                
                {/* Secondary Buttons */}
                <button className="btn btn-secondary">
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                  Secondary Button
                </button>
                
                {/* Success Buttons */}
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faSave} className="me-2" />
                  Success Button
                </button>
                
                {/* Danger Buttons */}
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} className="me-2" />
                  Danger Button
                </button>
                
                {/* Warning Buttons */}
                <button className="btn btn-warning">
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Warning Button
                </button>
                
                {/* Info Buttons */}
                <button className="btn btn-info">
                  <FontAwesomeIcon icon={faShare} className="me-2" />
                  Info Button
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Outlined Buttons</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Outline Primary
                </button>
                <button className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                  Outline Secondary
                </button>
                <button className="btn btn-outline-success">
                  <FontAwesomeIcon icon={faSave} className="me-2" />
                  Outline Success
                </button>
                <button className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faTrash} className="me-2" />
                  Outline Danger
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Button Sizes</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button className="btn btn-primary btn-sm">
                  Small Button
                </button>
                <button className="btn btn-secondary">
                  Default Button
                </button>
                <button className="btn btn-success btn-lg">
                  Large Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicButtons;
