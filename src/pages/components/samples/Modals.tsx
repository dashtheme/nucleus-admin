import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInfoCircle,
  faExclamationTriangle,
  faTimesCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Modals: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
    size: '',
    type: ''
  });

  const handleShowModal = (
    title: string,
    content: string,
    size: string = '',
    type: string = ''
  ) => {
    setModalContent({ title, content, size, type });
    setShowModal(true);
  };

  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Modals</h1>
        <p className="lead">Examples of modal dialogs and variations</p>
      </div>

      <div className="row">
        {/* Basic Modals */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Modals</h5>
            </div>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#basicModal"
              >
                Basic Modal
              </button>
              <button
                type="button"
                className="btn btn-info me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#scrollingModal"
              >
                Scrolling Modal
              </button>
              <button
                type="button"
                className="btn btn-success me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#centeredModal"
              >
                Vertically Centered
              </button>
            </div>
          </div>
        </div>

        {/* Modal Sizes */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Modal Sizes</h5>
            </div>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#xlModal"
              >
                Extra Large Modal
              </button>
              <button
                type="button"
                className="btn btn-secondary me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#lgModal"
              >
                Large Modal
              </button>
              <button
                type="button"
                className="btn btn-success me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#smModal"
              >
                Small Modal
              </button>
            </div>
          </div>
        </div>

        {/* Modal States */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Modal States</h5>
            </div>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-success me-2 mb-2"
                onClick={() =>
                  handleShowModal(
                    'Success',
                    'Operation completed successfully!',
                    '',
                    'success'
                  )
                }
              >
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                Success Modal
              </button>
              <button
                type="button"
                className="btn btn-danger me-2 mb-2"
                onClick={() =>
                  handleShowModal(
                    'Error',
                    'An error occurred during the operation.',
                    '',
                    'error'
                  )
                }
              >
                <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
                Error Modal
              </button>
              <button
                type="button"
                className="btn btn-warning me-2 mb-2"
                onClick={() =>
                  handleShowModal(
                    'Warning',
                    'Are you sure you want to proceed?',
                    '',
                    'warning'
                  )
                }
              >
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                Warning Modal
              </button>
              <button
                type="button"
                className="btn btn-info me-2 mb-2"
                onClick={() =>
                  handleShowModal(
                    'Information',
                    'Here is some important information.',
                    '',
                    'info'
                  )
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                Info Modal
              </button>
            </div>
          </div>
        </div>

        {/* Form Modals */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Form Modals</h5>
            </div>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login Modal
              </button>
              <button
                type="button"
                className="btn btn-success me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup Modal
              </button>
              <button
                type="button"
                className="btn btn-info me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Modal */}
      <div className="modal fade" id="basicModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Basic Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Modal */}
      <div className="modal fade" id="scrollingModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Scrolling Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {/* Add lots of content here */}
              {Array(20).fill(0).map((_, i) => (
                <p key={i}>
                  This is some placeholder content to show the scrolling behavior for modals.
                  We use repeated line breaks to demonstrate how content can overflow modal bodies.
                </p>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Modal */}
      <div className="modal fade" id="centeredModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Centered Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>This modal is vertically centered in the viewport.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Large Modal */}
      <div className="modal fade" id="xlModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Extra Large Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>This is an extra large modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {showModal && (
        <div className={`modal fade show`} style={{ display: 'block' }} tabIndex={-1}>
          <div className={`modal-dialog ${modalContent.size}`}>
            <div className="modal-content">
              <div className={`modal-header ${modalContent.type ? `bg-${modalContent.type} text-white` : ''}`}>
                <h5 className="modal-title">{modalContent.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalContent.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {modalContent.type === 'warning' && (
                  <button type="button" className="btn btn-warning">Proceed</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Modals;
