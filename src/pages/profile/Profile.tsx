import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBriefcase,
  faCode,
  faEdit,
  faCamera,
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// Import images
import { PROFILE_IMAGES } from '../../constants/images';
// Import styles
import '../../assets/styles/profile.css';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Projects', value: '25', icon: faBriefcase },
    { title: 'Tasks', value: '142', icon: faCheckCircle },
    { title: 'Hours', value: '580', icon: faClock },
  ];

  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform',
      progress: 75,
      type: 'Development',
      status: 'Active',
      team: 4,
      priority: 'High'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application',
      progress: 90,
      type: 'Mobile',
      status: 'Active',
      team: 3,
      priority: 'Medium'
    },
    {
      title: 'API Gateway',
      description: 'Microservices API gateway implementation',
      progress: 60,
      type: 'Backend',
      status: 'In Progress',
      team: 5,
      priority: 'High'
    },
    {
      title: 'CRM System',
      description: 'Customer relationship management platform',
      progress: 40,
      type: 'Full Stack',
      status: 'Planning',
      team: 6,
      priority: 'Medium'
    }
  ];

  const activities = [
    {
      type: 'success',
      icon: faCheckCircle,
      title: 'Dashboard Update',
      description: 'Successfully deployed new analytics dashboard',
      time: '2 hours ago'
    },
    {
      type: 'info',
      icon: faCode,
      title: 'Code Review',
      description: 'Completed code review for authentication module',
      time: '4 hours ago'
    },
    {
      type: 'warning',
      icon: faExclamationCircle,
      title: 'Sprint Planning',
      description: 'Upcoming sprint planning meeting',
      time: '1 day ago'
    },
    {
      type: 'primary',
      icon: faTasks,
      title: 'Task Completed',
      description: 'Implemented new user interface components',
      time: '2 days ago'
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover" style={{
          backgroundImage: `url(${PROFILE_IMAGES.COVER})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="profile-cover-content">
            <div className="profile-cover-edit">
              <button className="btn">
                <FontAwesomeIcon icon={faCamera} className="me-2" />
                Change Cover
              </button>
            </div>
          </div>
        </div>

        <div className="profile-user-info">
          <div className="profile-avatar">
            <img 
              src={PROFILE_IMAGES.AVATAR} 
              alt="Profile" 
              className="profile-image"
            />
            <button className="btn btn-sm btn-light profile-avatar-edit">
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </div>

          <div className="profile-info flex-grow-1">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h3 className="mb-1">John Doe</h3>
                <p className="text-muted mb-0">Senior Software Engineer</p>
              </div>
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Edit Profile
              </button>
            </div>

            <div className="profile-stats">
              {stats.map((stat, index) => (
                <div key={index} className="profile-stat-card">
                  <div className="profile-stat-icon">
                    <FontAwesomeIcon icon={stat.icon} />
                  </div>
                  <div className="profile-stat-content">
                    <div className="profile-stat-value">{stat.value}</div>
                    <div className="profile-stat-label">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="profile-about card">
            <div className="card-body">
              <h5 className="card-title mb-4">About</h5>
              <p className="text-muted mb-4">
                Experienced software engineer with a passion for building scalable web applications
                and solving complex problems.
              </p>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faEnvelope} className="text-muted" />
                  <div>
                    <small className="text-muted d-block">Email</small>
                    <span>john.doe@example.com</span>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faPhone} className="text-muted" />
                  <div>
                    <small className="text-muted d-block">Phone</small>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-muted" />
                  <div>
                    <small className="text-muted d-block">Location</small>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="profile-social mt-4">
                <h6 className="mb-3">Social Links</h6>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-light">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="btn btn-light">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="btn btn-light">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              {/* Tabs Section */}
              <ul className="profile-tabs">
                {['overview', 'projects', 'activity'].map((tab) => (
                  <li
                    key={tab}
                    className={`profile-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className="profile-tab-content">
                {activeTab === 'overview' && (
                  <div className="profile-overview">
                    <h5 className="mb-4">Recent Projects</h5>
                    <div className="row g-4">
                      {projects.slice(0, 3).map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-xl-4">
                          <div className="profile-project-card">
                            <h6 className="mb-2">{project.title}</h6>
                            <p className="text-muted small mb-3">{project.description}</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <span className={`badge bg-${project.priority.toLowerCase()}`}>
                                {project.priority}
                              </span>
                              <small className="text-muted">{project.status}</small>
                            </div>
                            <div className="progress" style={{ height: '4px' }}>
                              <div 
                                className="progress-bar" 
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="profile-activity">
                    {activities.map((activity, index) => (
                      <div key={index} className="profile-activity-item">
                        <div className={`activity-icon bg-${activity.type}`}>
                          <FontAwesomeIcon icon={activity.icon} />
                        </div>
                        <div className="activity-content">
                          <h6 className="mb-1">{activity.title}</h6>
                          <p className="text-muted mb-1">{activity.description}</p>
                          <small className="text-muted">
                            <FontAwesomeIcon icon={faClock} className="me-1" />
                            {activity.time}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="profile-projects">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Project</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Team</th>
                            <th>Priority</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projects.map((project, index) => (
                            <tr key={index}>
                              <td>
                                <h6 className="mb-1">{project.title}</h6>
                                <small className="text-muted">{project.description}</small>
                              </td>
                              <td>{project.type}</td>
                              <td>
                                <span className={`badge bg-${project.status.toLowerCase()}-subtle text-${project.status.toLowerCase()}`}>
                                  {project.status}
                                </span>
                              </td>
                              <td>
                                <div className="progress" style={{ height: '4px' }}>
                                  <div 
                                    className="progress-bar" 
                                    style={{ width: `${project.progress}%` }}
                                  />
                                </div>
                              </td>
                              <td>{project.team} members</td>
                              <td>
                                <span className={`badge bg-${project.priority.toLowerCase()}`}>
                                  {project.priority}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
