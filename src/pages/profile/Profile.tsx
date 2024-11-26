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
  faClock,
  faCalendarAlt,
  faCheckCircle,
  faExclamationCircle,
  faCode,
  faTasks,
  faChartLine,
  faComments,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// Import images
import coverBg from '@/assets/images/cover-bg.jpg';
import profileAvatar from '@/assets/images/profile-avatar.jpg';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 75 }
  ];

  const handleTabClick = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover" style={{
          backgroundImage: `url(${coverBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="profile-cover-edit">
            <button className="btn btn-light btn-sm">
              <FontAwesomeIcon icon={faCamera} className="me-2" /> Change Cover
            </button>
          </div>
        </div>
        
        <div className="profile-user-info">
          <div className="profile-avatar">
            <img 
              src={profileAvatar}
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-avatar-edit">
              <button className="btn btn-primary btn-sm rounded-circle">
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
          </div>
          
          <div className="profile-details">
            <h2>
              John Doe
              <span className="badge bg-primary">Admin</span>
            </h2>
            <p className="text-muted mb-3">Senior Full Stack Developer</p>
            <div className="profile-actions">
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Profile
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

      <div className="profile-content">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card profile-about mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">About</h5>
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

            <div className="card profile-stats">
              <div className="card-header">
                <h5 className="card-title mb-0">Statistics</h5>
              </div>
              <div className="card-body">
                <div className="row g-0">
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

          <div className="col-lg-8">
            <div className="card">
              <div className="card-header p-0">
                <ul className="nav nav-tabs card-header-tabs m-0">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={(e) => handleTabClick('overview', e)}
                      href="#"
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                      onClick={(e) => handleTabClick('projects', e)}
                      href="#"
                    >
                      <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                      onClick={(e) => handleTabClick('activity', e)}
                      href="#"
                    >
                      <FontAwesomeIcon icon={faChartLine} className="me-2" />
                      Activity
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {activeTab === 'overview' && (
                  <div className="tab-overview">
                    <h6 className="mb-4">Professional Summary</h6>
                    <p className="text-muted mb-4">
                      Experienced Full Stack Developer with over 8 years of expertise in building scalable web applications.
                      Specialized in React, Node.js, and cloud technologies. Passionate about creating efficient and user-friendly solutions.
                    </p>
                    
                    <h6 className="mb-4">Skills</h6>
                    <div className="skills-container mb-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="skill-item mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="fw-medium">{skill.name}</span>
                            <span className="text-muted">{skill.level}%</span>
                          </div>
                          <div className="progress" style={{ height: '6px' }}>
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h6 className="mb-4">Recent Achievements</h6>
                    <div className="achievements-container">
                      <div className="achievement-item">
                        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
                        <div>
                          <h6 className="mb-1">Employee of the Month</h6>
                          <p className="text-muted mb-0">Recognized for outstanding performance in Q4 2023</p>
                        </div>
                      </div>
                      <div className="achievement-item">
                        <FontAwesomeIcon icon={faCode} className="text-primary me-2" />
                        <div>
                          <h6 className="mb-1">Innovation Award</h6>
                          <p className="text-muted mb-0">Developed new automation framework</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="tab-projects">
                    <div className="row g-4">
                      {projects.map((project, index) => (
                        <div key={index} className="col-md-6">
                          <div className="project-card">
                            <div className="project-header">
                              <h6 className="mb-1">{project.title}</h6>
                              <span className={`badge bg-${project.status === 'Active' ? 'success' : 'warning'}`}>
                                {project.status}
                              </span>
                            </div>
                            <p className="text-muted small mb-3">{project.description}</p>
                            <div className="project-meta mb-3">
                              <span className="badge bg-light text-dark me-2">{project.type}</span>
                              <span className={`badge bg-${project.priority === 'High' ? 'danger' : 'info'}`}>
                                {project.priority}
                              </span>
                            </div>
                            <div className="project-progress">
                              <div className="progress mb-2">
                                <div 
                                  className="progress-bar" 
                                  role="progressbar" 
                                  style={{ width: `${project.progress}%` }}
                                  aria-valuenow={project.progress}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <span className="text-muted small">{project.progress}% Complete</span>
                                <span className="text-muted small">{project.team} team members</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                            <h6 className="mb-1">{activity.title}</h6>
                            <p className="mb-2">{activity.description}</p>
                            <span className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                              {activity.time}
                            </span>
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
