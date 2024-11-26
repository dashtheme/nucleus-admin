import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const Lists: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Lists</h1>
        <p className="lead">Examples of list styles and variations</p>
      </div>

      <div className="row">
        {/* Basic List */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic List</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">First item</li>
                <li className="list-group-item">Second item</li>
                <li className="list-group-item">Third item</li>
                <li className="list-group-item">Fourth item</li>
                <li className="list-group-item">Fifth item</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Active Items List */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Active and Disabled Items</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item active">Active item</li>
                <li className="list-group-item">Regular item</li>
                <li className="list-group-item disabled">Disabled item</li>
                <li className="list-group-item">Regular item</li>
                <li className="list-group-item">Regular item</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links and Buttons List */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Links and Buttons</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                <button className="list-group-item list-group-item-action active">
                  Active Button
                </button>
                <button className="list-group-item list-group-item-action">
                  Button Item
                </button>
                <a href="#" className="list-group-item list-group-item-action">
                  Link Item
                </a>
                <button className="list-group-item list-group-item-action">
                  Button Item
                </button>
                <button className="list-group-item list-group-item-action" disabled>
                  Disabled Button
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contextual Classes */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Contextual Classes</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary">Primary item</li>
                <li className="list-group-item list-group-item-secondary">Secondary item</li>
                <li className="list-group-item list-group-item-success">Success item</li>
                <li className="list-group-item list-group-item-danger">Danger item</li>
                <li className="list-group-item list-group-item-warning">Warning item</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Content */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Custom Content</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>5 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon List */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Icon List</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faUser} className="me-3 text-primary" />
                  Profile Settings
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="me-3 text-success" />
                  Messages
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-3 text-info" />
                  Phone Contacts
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="me-3 text-warning" />
                  Location
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Badge List */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Badge List</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Inbox
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Messages
                  <span className="badge bg-success rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Tasks
                  <span className="badge bg-danger rounded-pill">8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Notifications
                  <span className="badge bg-info rounded-pill">5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
