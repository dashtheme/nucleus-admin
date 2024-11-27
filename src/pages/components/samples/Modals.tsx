import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInfoCircle,
  faExclamationTriangle,
  faTimesCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap';

const Modals: React.FC = () => {
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showScrollingModal, setShowScrollingModal] = useState(false);
  const [showCenteredModal, setShowCenteredModal] = useState(false);
  const [showXLModal, setShowXLModal] = useState(false);
  const [showLGModal, setShowLGModal] = useState(false);
  const [showSMModal, setShowSMModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showStateModal, setShowStateModal] = useState(false);
  const [modalState, setModalState] = useState({
    title: '',
    content: '',
    variant: ''
  });

  // Long content for scrolling modal
  const longContent = Array(20).fill('This is some sample content for the scrolling modal. ').join('');

  const handleStateModal = (title: string, content: string, variant: string) => {
    setModalState({ title, content, variant });
    setShowStateModal(true);
  };

  return (
    <div className="components-page">
      <div className="page-header">
        <h1 className="h3 mb-3">Modals</h1>
        <p className="lead">Examples of modal dialogs and variations</p>
      </div>

      <div className="row">
        {/* Basic Modals */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Basic Modals</h5>
            </div>
            <div className="card-body">
              <Button variant="primary" className="me-2 mb-2" onClick={() => setShowBasicModal(true)}>
                Basic Modal
              </Button>
              <Button variant="info" className="me-2 mb-2" onClick={() => setShowScrollingModal(true)}>
                Scrolling Modal
              </Button>
              <Button variant="success" className="me-2 mb-2" onClick={() => setShowCenteredModal(true)}>
                Vertically Centered
              </Button>
            </div>
          </div>
        </div>

        {/* Modal Sizes */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Modal Sizes</h5>
            </div>
            <div className="card-body">
              <Button variant="primary" className="me-2 mb-2" onClick={() => setShowXLModal(true)}>
                Extra Large Modal
              </Button>
              <Button variant="secondary" className="me-2 mb-2" onClick={() => setShowLGModal(true)}>
                Large Modal
              </Button>
              <Button variant="success" className="me-2 mb-2" onClick={() => setShowSMModal(true)}>
                Small Modal
              </Button>
            </div>
          </div>
        </div>

        {/* Modal States */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Modal States</h5>
            </div>
            <div className="card-body">
              <Button
                variant="success"
                className="me-2 mb-2"
                onClick={() => handleStateModal('Success', 'Operation completed successfully!', 'success')}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                Success Modal
              </Button>
              <Button
                variant="danger"
                className="me-2 mb-2"
                onClick={() => handleStateModal('Error', 'An error occurred during the operation.', 'danger')}
              >
                <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
                Error Modal
              </Button>
              <Button
                variant="warning"
                className="me-2 mb-2"
                onClick={() => handleStateModal('Warning', 'Are you sure you want to proceed?', 'warning')}
              >
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                Warning Modal
              </Button>
              <Button
                variant="info"
                className="me-2 mb-2"
                onClick={() => handleStateModal('Information', 'Here is some important information.', 'info')}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                Info Modal
              </Button>
            </div>
          </div>
        </div>

        {/* Form Modals */}
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Form Modals</h5>
            </div>
            <div className="card-body">
              <Button variant="primary" className="me-2 mb-2" onClick={() => setShowLoginModal(true)}>
                Login Modal
              </Button>
              <Button variant="success" className="me-2 mb-2" onClick={() => setShowSignupModal(true)}>
                Signup Modal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Modal */}
      <Modal show={showBasicModal} onHide={() => setShowBasicModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a basic modal dialog window.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBasicModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowBasicModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Scrolling Modal */}
      <Modal show={showScrollingModal} onHide={() => setShowScrollingModal(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Scrolling Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{longContent}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowScrollingModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Centered Modal */}
      <Modal show={showCenteredModal} onHide={() => setShowCenteredModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Centered Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This modal is vertically centered in the viewport.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCenteredModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* XL Modal */}
      <Modal show={showXLModal} onHide={() => setShowXLModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Extra Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is an extra large modal dialog.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowXLModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* LG Modal */}
      <Modal show={showLGModal} onHide={() => setShowLGModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a large modal dialog.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLGModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* SM Modal */}
      <Modal show={showSMModal} onHide={() => setShowSMModal(false)} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Small Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a small modal dialog.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSMModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* State Modal */}
      <Modal show={showStateModal} onHide={() => setShowStateModal(false)}>
        <Modal.Header className={`bg-${modalState.variant} text-white`} closeButton>
          <Modal.Title>{modalState.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalState.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={modalState.variant} onClick={() => setShowStateModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowLoginModal(false)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSignupModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => setShowSignupModal(false)}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modals;
