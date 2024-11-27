import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBell,
  faLock,
  faGlobe,
  faPalette,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/theme.scss';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settings-page w-100">
      <h1 className="h3 mb-4">Settings</h1>

      <div className="row g-4">
        <div className="col-12 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === 'profile' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Profile
                </button>
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === 'notifications' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <FontAwesomeIcon icon={faBell} className="me-2" />
                  Notifications
                </button>
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === 'security' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('security')}
                >
                  <FontAwesomeIcon icon={faLock} className="me-2" />
                  Security
                </button>
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === 'language' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('language')}
                >
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  Language
                </button>
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === 'appearance' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('appearance')}
                >
                  <FontAwesomeIcon icon={faPalette} className="me-2" />
                  Appearance
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-9">
          <div className="card shadow-sm">
            <div className="card-body">
              {activeTab === 'profile' && (
                <div>
                  <h5 className="card-title mb-4">Profile Settings</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="fullName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">Bio</label>
                      <textarea className="form-control" id="bio" rows={3}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <FontAwesomeIcon icon={faSave} className="me-2" />
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h5 className="card-title mb-4">Notification Preferences</h5>
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="emailNotifications" />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Email Notifications
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="pushNotifications" />
                      <label className="form-check-label" htmlFor="pushNotifications">
                        Push Notifications
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h5 className="card-title mb-4">Security Settings</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">Current Password</label>
                      <input type="password" className="form-control" id="currentPassword" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input type="password" className="form-control" id="newPassword" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <FontAwesomeIcon icon={faSave} className="me-2" />
                      Update Password
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'language' && (
                <div>
                  <h5 className="card-title mb-4">Language Settings</h5>
                  <div className="mb-3">
                    <label htmlFor="language" className="form-label">Select Language</label>
                    <select className="form-select" id="language">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div>
                  <h5 className="card-title mb-4">Appearance Settings</h5>
                  <div className="mb-3">
                    <label className="form-label d-block">Theme</label>
                    <div className="btn-group" role="group">
                      <input type="radio" className="btn-check" name="theme" id="lightTheme" autoComplete="off" defaultChecked />
                      <label className="btn btn-outline-primary" htmlFor="lightTheme">Light</label>
                      <input type="radio" className="btn-check" name="theme" id="darkTheme" autoComplete="off" />
                      <label className="btn btn-outline-primary" htmlFor="darkTheme">Dark</label>
                      <input type="radio" className="btn-check" name="theme" id="systemTheme" autoComplete="off" />
                      <label className="btn btn-outline-primary" htmlFor="systemTheme">System</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
