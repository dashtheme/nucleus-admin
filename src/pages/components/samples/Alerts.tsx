import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

const Alerts: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Alerts</h1>
        <p className="lead">Examples of alert styles and variations</p>
      </div>

      <div className="row">
        {/* Basic Alerts */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Alerts</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
            </div>
          </div>
        </div>

        {/* Alerts with Icons */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Alerts with Icons</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-primary d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                <div>
                  An example primary alert with an icon
                </div>
              </div>
              <div className="alert alert-success d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                <div>
                  An example success alert with an icon
                </div>
              </div>
              <div className="alert alert-warning d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                <div>
                  An example warning alert with an icon
                </div>
              </div>
              <div className="alert alert-danger d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
                <div>
                  An example danger alert with an icon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dismissible Alerts */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Dismissible Alerts</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Additional Content</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styled Alerts */}
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Custom Styled Alerts</h5>
            </div>
            <div className="card-body">
              <div className="alert custom-alert-primary" role="alert">
                <div className="d-flex">
                  <div className="alert-icon">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                  </div>
                  <div className="alert-content ms-3">
                    <h6 className="alert-heading">Information Message</h6>
                    <p className="mb-0">
                      This is a custom styled primary alert with an icon and additional content.
                      You can use this for important notifications.
                    </p>
                  </div>
                  <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>

              <div className="alert custom-alert-success" role="alert">
                <div className="d-flex">
                  <div className="alert-icon">
                    <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                  </div>
                  <div className="alert-content ms-3">
                    <h6 className="alert-heading">Success Message</h6>
                    <p className="mb-0">
                      Your changes have been saved successfully. The system has been updated
                      with the new information.
                    </p>
                  </div>
                  <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>

              <div className="alert custom-alert-warning" role="alert">
                <div className="d-flex">
                  <div className="alert-icon">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                  </div>
                  <div className="alert-content ms-3">
                    <h6 className="alert-heading">Warning Message</h6>
                    <p className="mb-0">
                      Please review your input before proceeding. Some fields might require
                      your attention.
                    </p>
                  </div>
                  <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
