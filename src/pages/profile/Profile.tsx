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
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { images } from '../../constants/images';
import '../../assets/styles/profile.css';
import '../../styles/theme.scss';

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
      description: 'A real-time analytics dashboard built with React and D3.js',
      progress: 75,
      status: 'In Progress'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application using React Native',
      progress: 90,
      status: 'Review'
    },
    {
      title: 'API Gateway',
      description: 'Microservices API gateway implementation',
      progress: 60,
      status: 'Development'
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
          backgroundImage: `url(${images.coverBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="profile-cover-content">
            <div className="profile-cover-edit">
              <button className="btn">
                <FontAwesomeIcon icon={faCamera} className="me-2 text-secondary" />
                Change Cover
              </button>
            </div>
          </div>
        </div>

        <div className="profile-user-info">
          <div className="profile-avatar">
            <img 
              src={images.profileAvatar} 
              alt="Profile" 
              className="profile-image"
            />
            <button className="profile-avatar-edit btn btn-sm btn-light">
              <FontAwesomeIcon icon={faCamera} className="text-secondary" />
            </button>
          </div>

          <div className="profile-info">
            <div className="d-flex">
              <div>
                <h3 className="mb-1">John Doe</h3>
                <p className="text-muted mb-2">Senior Software Engineer</p>
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
                    <FontAwesomeIcon icon={stat.icon} className="text-primary" />
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
                <a href="#" className="btn btn-light me-2">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#" className="btn btn-light me-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="btn btn-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('projects')}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                    onClick={() => setActiveTab('activity')}
                  >
                    Activity
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-4">
                {activeTab === 'overview' && (
                  <div>
                    <h5 className="mb-4">Recent Projects</h5>
                    <div className="row g-4">
                      {projects.slice(0, 3).map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-xl-4">
                          <div className="project-card">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h6 className="mb-0">{project.title}</h6>
                              <span className={`badge bg-${project.status === 'In Progress' ? 'warning' : 
                                project.status === 'Review' ? 'info' : 'primary'}`}>
                                {project.status}
                              </span>
                            </div>
                            <p className="text-muted small mb-3">{project.description}</p>
                            <div className="progress" style={{ height: '6px' }}>
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${project.progress}%` }}
                                aria-valuenow={project.progress} 
                                aria-valuemin={0} 
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <h5 className="mb-4">All Projects</h5>
                    {projects.map((project, index) => (
                      <div key={index} className="project-card">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="mb-0">{project.title}</h6>
                          <span className={`badge bg-${project.status === 'In Progress' ? 'warning' : 
                            project.status === 'Review' ? 'info' : 'primary'}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-muted small mb-3">{project.description}</p>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{ width: `${project.progress}%` }}
                            aria-valuenow={project.progress} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div>
                    <h5 className="mb-4">Recent Activity</h5>
                    {activities.map((activity, index) => (
                      <div key={index} className={`activity-item ${activity.type}`}>
                        <div className="activity-icon">
                          <FontAwesomeIcon icon={activity.icon} className={`text-${activity.type}`} />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
