import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinners: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Spinners</h1>
        <p className="lead">Examples of loading spinners and animations</p>
      </div>

      <div className="row">
        {/* Border Spinners */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Border Spinners</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="spinner-border text-primary me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-secondary me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-info me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growing Spinners */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Growing Spinners</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="spinner-grow text-primary me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Spinner Sizes</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="spinner-border spinner-border-sm me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div>
                <div className="spinner-grow spinner-grow-sm me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons with Spinners */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Buttons with Spinners</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary me-2 mb-2" disabled>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              <button className="btn btn-success me-2 mb-2" disabled>
                <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              <button className="btn btn-danger me-2 mb-2" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
              </button>
              <button className="btn btn-warning me-2 mb-2" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
              </button>
            </div>
          </div>
        </div>

        {/* Custom Spinners */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Custom Spinners</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 text-center">
                  <div className="custom-spinner-primary mb-3">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                  </div>
                  <p>Double Bounce</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="custom-spinner-success mb-3">
                    <div className="wave">
                      <div className="rect1"></div>
                      <div className="rect2"></div>
                      <div className="rect3"></div>
                      <div className="rect4"></div>
                      <div className="rect5"></div>
                    </div>
                  </div>
                  <p>Wave</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="custom-spinner-warning mb-3">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                  </div>
                  <p>Cube</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="custom-spinner-danger mb-3">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                  </div>
                  <p>Font Awesome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinners;
