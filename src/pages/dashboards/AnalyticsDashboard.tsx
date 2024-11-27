import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faEye,
  faClock,
  faArrowTrendUp,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsDashboard: React.FC = () => {
  // Analytics Stats
  const stats = [
    {
      title: 'Page Views',
      value: '2.4M',
      increase: '+12.5%',
      icon: faEye,
      color: '#ff9f43'
    },
    {
      title: 'Active Users',
      value: '45.2K',
      increase: '+8.1%',
      icon: faUsers,
      color: '#ff9a9e'
    },
    {
      title: 'Avg. Session',
      value: '4m 23s',
      increase: '+3.2%',
      icon: faClock,
      color: '#ff9f43'
    },
    {
      title: 'Bounce Rate',
      value: '32.1%',
      increase: '-5.4%',
      icon: faArrowTrendUp,
      color: '#ff9a9e'
    }
  ];

  // User Activity Data
  const activityData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 3000, 3500, 2500, 1800],
        borderColor: '#ff9f43',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(255, 159, 67, 0.1)',
      }
    ],
  };

  // Traffic Sources Data
  const trafficSourcesData = {
    labels: ['Organic', 'Direct', 'Referral', 'Social', 'Email', 'Paid'],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          '#ff9f43',
          '#ff9a9e',
          'rgba(255, 159, 67, 0.8)',
          'rgba(255, 154, 158, 0.8)',
          'rgba(255, 159, 67, 0.6)',
          'rgba(255, 154, 158, 0.6)',
        ],
      }
    ],
  };

  // Device Usage Data
  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        label: 'Sessions by Device',
        data: [5200, 3800, 1000],
        backgroundColor: [
          '#ff9f43',
          '#ff9a9e',
          'rgba(255, 159, 67, 0.6)',
        ],
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        beginAtZero: true,
        grid: {
          borderColor: 'rgb(234, 236, 244)',
          drawBorder: false,
          borderDash: [2],
          color: 'rgb(234, 236, 244)',
        },
      },
      x: {
        type: 'category' as const,
        display: true,
        grid: {
          borderColor: 'rgb(234, 236, 244)',
          display: false,
          drawBorder: true,
          borderDash: [2],
          color: 'rgb(234, 236, 244)',
        },
      },
    },
  };

  // Popular Pages Data
  const popularPages = [
    { path: '/home', views: '125.3K', increase: '+12.4%' },
    { path: '/products', views: '89.7K', increase: '+8.2%' },
    { path: '/blog', views: '72.4K', increase: '+15.7%' },
    { path: '/about', views: '45.9K', increase: '+5.3%' },
    { path: '/contact', views: '34.2K', increase: '+3.8%' }
  ];

  return (
    <div className="analytics-dashboard p-3">
      <div className="row g-3">
        {/* Stats Column - Left Side */}
        <div className="col-12 col-lg-3">
          <div className="row g-3">
            {stats.map((stat, index) => (
              <div key={index} className="col-12">
                <div className="card border-0 h-100" style={{
                  background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}25)`,
                  borderRadius: '12px',
                }}>
                  <div className="card-body">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div style={{
                          background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                          borderRadius: '50%',
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '45px',
                          height: '45px'
                        }}>
                          <FontAwesomeIcon icon={stat.icon} style={{ color: 'white' }} />
                        </div>
                        <span style={{
                          background: `${stat.color}20`,
                          color: stat.color,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.875rem'
                        }}>
                          {stat.increase}
                        </span>
                      </div>
                      <h3 className="mb-1 fw-bold" style={{ color: stat.color }}>{stat.value}</h3>
                      <span className="text-muted small">{stat.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Right Side */}
        <div className="col-12 col-lg-9">
          {/* User Activity Card */}
          <div className="card mb-3" style={{ borderRadius: '12px', border: 'none', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
            <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0" style={{ color: '#ff9f43' }}>User Activity</h5>
                  <small className="text-muted">Real-time user activity tracking</small>
                </div>
                <div className="btn-group">
                  <button className="btn btn-sm" style={{ 
                    border: '1px solid #ff9f43',
                    color: '#ff9f43',
                    borderRadius: '20px 0 0 20px'
                  }}>Today</button>
                  <button className="btn btn-sm" style={{ 
                    background: '#ff9f43',
                    border: '1px solid #ff9f43',
                    color: 'white'
                  }}>Week</button>
                  <button className="btn btn-sm" style={{ 
                    border: '1px solid #ff9f43',
                    color: '#ff9f43',
                    borderRadius: '0 20px 20px 0'
                  }}>Month</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Line data={activityData} options={chartOptions} />
            </div>
          </div>

          {/* Traffic Sources and Device Usage */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <div className="card h-100" style={{ borderRadius: '12px', border: 'none', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
                <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
                  <h5 className="mb-0" style={{ color: '#ff9f43' }}>Traffic Sources</h5>
                  <small className="text-muted">Distribution of traffic channels</small>
                </div>
                <div className="card-body">
                  <Doughnut data={trafficSourcesData} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card h-100" style={{ borderRadius: '12px', border: 'none', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
                <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
                  <h5 className="mb-0" style={{ color: '#ff9f43' }}>Device Usage</h5>
                  <small className="text-muted">Sessions by device type</small>
                </div>
                <div className="card-body">
                  <Bar data={deviceData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Popular Pages Card */}
          <div className="card" style={{ borderRadius: '12px', border: 'none', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
            <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
              <h5 className="mb-0" style={{ color: '#ff9f43' }}>Popular Pages</h5>
              <small className="text-muted">Most visited pages this month</small>
            </div>
            <div className="card-body px-4">
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th style={{ color: '#ff9f43', fontSize: '0.875rem' }}>PAGE</th>
                      <th style={{ color: '#ff9f43', fontSize: '0.875rem' }}>VIEWS</th>
                      <th style={{ color: '#ff9f43', fontSize: '0.875rem' }}>GROWTH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularPages.map((page, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div style={{
                              background: 'linear-gradient(135deg, #ff9f4315, #ff9a9e15)',
                              borderRadius: '8px',
                              padding: '10px',
                              marginRight: '12px'
                            }}>
                              <FontAwesomeIcon icon={faGlobe} style={{ color: '#ff9f43' }} />
                            </div>
                            <span className="fw-medium">{page.path}</span>
                          </div>
                        </td>
                        <td className="fw-bold">{page.views}</td>
                        <td>
                          <span style={{
                            background: '#ff9f4315',
                            color: '#ff9f43',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                            {page.increase}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
