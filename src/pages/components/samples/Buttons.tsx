import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSave, 
  faTrash, 
  faEdit, 
  faPlus,
  faCheck,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const Buttons: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Buttons</h1>
        <p className="lead">Examples of button styles and variations</p>
      </div>

      <div className="row">
        {/* Basic Buttons */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Buttons</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary me-2 mb-2">Primary</button>
              <button className="btn btn-secondary me-2 mb-2">Secondary</button>
              <button className="btn btn-success me-2 mb-2">Success</button>
              <button className="btn btn-danger me-2 mb-2">Danger</button>
              <button className="btn btn-warning me-2 mb-2">Warning</button>
              <button className="btn btn-info me-2 mb-2">Info</button>
              <button className="btn btn-light me-2 mb-2">Light</button>
              <button className="btn btn-dark me-2 mb-2">Dark</button>
            </div>
          </div>
        </div>

        {/* Outline Buttons */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Outline Buttons</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-outline-primary me-2 mb-2">Primary</button>
              <button className="btn btn-outline-secondary me-2 mb-2">Secondary</button>
              <button className="btn btn-outline-success me-2 mb-2">Success</button>
              <button className="btn btn-outline-danger me-2 mb-2">Danger</button>
              <button className="btn btn-outline-warning me-2 mb-2">Warning</button>
              <button className="btn btn-outline-info me-2 mb-2">Info</button>
              <button className="btn btn-outline-light me-2 mb-2">Light</button>
              <button className="btn btn-outline-dark me-2 mb-2">Dark</button>
            </div>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Button Sizes</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary btn-lg me-2 mb-2">Large Button</button>
              <button className="btn btn-primary me-2 mb-2">Default Button</button>
              <button className="btn btn-primary btn-sm me-2 mb-2">Small Button</button>
            </div>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Icon Buttons</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary me-2 mb-2">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save
              </button>
              <button className="btn btn-danger me-2 mb-2">
                <FontAwesomeIcon icon={faTrash} className="me-2" />
                Delete
              </button>
              <button className="btn btn-info me-2 mb-2">
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Edit
              </button>
              <button className="btn btn-success me-2 mb-2">
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                Add New
              </button>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Button States</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary me-2 mb-2">Normal</button>
              <button className="btn btn-primary active me-2 mb-2">Active</button>
              <button className="btn btn-primary disabled me-2 mb-2">Disabled</button>
              <button className="btn btn-primary me-2 mb-2">
                <FontAwesomeIcon icon={faSpinner} className="me-2 fa-spin" />
                Loading
              </button>
            </div>
          </div>
        </div>

        {/* Block Buttons */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Block Buttons</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-primary">Block Button</button>
                <button className="btn btn-secondary">Block Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
