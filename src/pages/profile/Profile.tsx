import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBriefcase,
  faEdit,
  faCamera,
  faChartLine,
  faClock,
  faCalendarAlt,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const activities = [
    {
      type: 'success',
      icon: faCheckCircle,
      title: 'Project Completed',
      description: 'Successfully delivered the dashboard project',
      time: '2 hours ago'
    },
    {
      type: 'warning',
      icon: faExclamationCircle,
      title: 'Meeting Scheduled',
      description: 'Team sync with design department',
      time: '5 hours ago'
    },
    // Add more activities as needed
  ];

  const stats = [
    { title: 'Projects', value: '25', icon: faBriefcase },
    { title: 'Tasks', value: '142', icon: faCheckCircle },
    { title: 'Hours', value: '580', icon: faClock },
  ];

  return (
    <div className="profile-page">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-cover-edit">
            <button className="btn btn-light btn-sm">
              <FontAwesomeIcon icon={faCamera} /> Change Cover
            </button>
          </div>
        </div>
        <div className="profile-user-info">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/150" alt="Profile" />
            <div className="profile-avatar-edit">
              <button className="btn btn-primary btn-sm rounded-circle">
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
          </div>
          <div className="profile-details">
            <h2>John Doe <span className="badge bg-primary">Admin</span></h2>
            <p className="text-muted">Senior Full Stack Developer</p>
            <div className="profile-actions">
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faEdit} /> Edit Profile
              </button>
              <div className="social-links">
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

      {/* Main Content */}
      <div className="profile-content">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4">
            {/* About Card */}
            <div className="card profile-about">
              <div className="card-header">
                <h5 className="card-title">About</h5>
              </div>
              <div className="card-body">
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faUser} />
                  <div>
                    <label>Full Name</label>
                    <p>John Doe</p>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <label>Email</label>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <label>Phone</label>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <div>
                    <label>Location</label>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <div>
                    <label>Department</label>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card profile-stats">
              <div className="card-header">
                <h5 className="card-title">Statistics</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-4">
                      <div className="stat-item">
                        <FontAwesomeIcon icon={stat.icon} />
                        <h3>{stat.value}</h3>
                        <p>{stat.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-8">
            {/* Tabs Navigation */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                      href="#"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                      onClick={() => setActiveTab('projects')}
                      href="#"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                      onClick={() => setActiveTab('activity')}
                      href="#"
                    >
                      Activity
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {activeTab === 'overview' && (
                  <div className="tab-overview">
                    <h6>Professional Summary</h6>
                    <p>
                      Experienced Full Stack Developer with over 8 years of expertise in building scalable web applications.
                      Specialized in React, Node.js, and cloud technologies. Passionate about creating efficient and user-friendly solutions.
                    </p>
                    
                    <h6 className="mt-4">Skills</h6>
                    <div className="skills-container">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill, index) => (
                        <span key={index} className="badge bg-light text-dark me-2 mb-2">{skill}</span>
                      ))}
                    </div>

                    <h6 className="mt-4">Current Projects</h6>
                    <div className="current-projects">
                      <div className="project-card">
                        <div className="project-progress">
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '75%' }} 
                              aria-valuenow={75} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                          <span>75%</span>
                        </div>
                        <h6>Dashboard Redesign</h6>
                        <p className="text-muted">UI/UX Design, Frontend Development</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="tab-activity">
                    <div className="timeline">
                      {activities.map((activity, index) => (
                        <div key={index} className={`timeline-item ${activity.type}`}>
                          <div className="timeline-icon">
                            <FontAwesomeIcon icon={activity.icon} />
                          </div>
                          <div className="timeline-content">
                            <h6>{activity.title}</h6>
                            <p>{activity.description}</p>
                            <span className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} /> {activity.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="tab-projects">
                    <div className="row">
                      {[1, 2, 3, 4].map((project) => (
                        <div key={project} className="col-md-6 mb-4">
                          <div className="project-card">
                            <div className="project-header">
                              <h6>Project {project}</h6>
                              <span className="badge bg-success">Active</span>
                            </div>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="project-meta">
                              <div className="project-progress">
                                <div className="progress">
                                  <div 
                                    className="progress-bar" 
                                    role="progressbar" 
                                    style={{ width: '60%' }} 
                                    aria-valuenow={60} 
                                    aria-valuemin={0} 
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                                <span>60%</span>
                              </div>
                              <div className="project-team">
                                <img src="https://via.placeholder.com/30" alt="Team Member" className="rounded-circle" />
                                <img src="https://via.placeholder.com/30" alt="Team Member" className="rounded-circle" />
                                <span className="more-members">+3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
