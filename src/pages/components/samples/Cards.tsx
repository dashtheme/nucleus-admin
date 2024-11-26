import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faChartLine,
  faShoppingCart,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Cards: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Cards</h1>
        <p className="lead">Examples of card styles and variations</p>
      </div>

      <div className="row">
        {/* Basic Cards */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Card</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a basic card with a header and body. You can use it to display any kind of content.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="col-lg-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/350x200" 
              className="card-img-top" 
              alt="Card example"
            />
            <div className="card-body">
              <h5 className="card-title">Card with Image</h5>
              <p className="card-text">
                This card includes an image at the top. Perfect for featuring visual content.
              </p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Icon Stats Card */}
        <div className="col-lg-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
                <div>
                  <h6 className="card-title mb-0">Total Users</h6>
                  <h2 className="mb-0">1,234</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faChartLine} size="2x" className="text-primary" />
              </div>
              <h5 className="card-title">Analytics</h5>
              <p className="card-text">Track your performance with detailed analytics</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-success" />
              </div>
              <h5 className="card-title">E-commerce</h5>
              <p className="card-text">Manage your online store with ease</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-info" />
              </div>
              <h5 className="card-title">Messaging</h5>
              <p className="card-text">Connect with your users instantly</p>
            </div>
          </div>
        </div>

        {/* List Group Card */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Card with List Group</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First Item</li>
              <li className="list-group-item">Second Item</li>
              <li className="list-group-item">Third Item</li>
            </ul>
          </div>
        </div>

        {/* Footer Card */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Card with Footer</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a card with a footer section. The footer can contain additional information or actions.
              </p>
            </div>
            <div className="card-footer text-muted">
              Last updated 3 mins ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
