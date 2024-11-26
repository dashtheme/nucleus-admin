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
      color: 'info'
    },
    {
      title: 'Active Users',
      value: '45.2K',
      increase: '+8.1%',
      icon: faUsers,
      color: 'success'
    },
    {
      title: 'Avg. Session',
      value: '4m 23s',
      increase: '+3.2%',
      icon: faClock,
      color: 'info'
    },
    {
      title: 'Bounce Rate',
      value: '32.1%',
      increase: '-5.4%',
      icon: faArrowTrendUp,
      color: 'warning'
    }
  ];

  // User Activity Data
  const activityData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 3000, 3500, 2500, 1800],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
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
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
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
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 206, 86, 0.8)',
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
                <div className={`card bg-${stat.color} bg-opacity-10 border-0 h-100`}>
                  <div className="card-body">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className={`icon-shape rounded-circle bg-${stat.color} bg-opacity-25 p-3`}>
                          <FontAwesomeIcon icon={stat.icon} className={`text-${stat.color}`} />
                        </div>
                        <span className={`badge bg-${stat.color} bg-opacity-25 text-${stat.color}`}>
                          {stat.increase}
                        </span>
                      </div>
                      <h3 className="mb-1 fw-bold">{stat.value}</h3>
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
          <div className="card mb-3">
            <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">User Activity</h5>
                  <small className="text-muted">Real-time user activity tracking</small>
                </div>
                <div className="btn-group">
                  <button className="btn btn-sm btn-outline-secondary">Today</button>
                  <button className="btn btn-sm btn-outline-secondary active">Week</button>
                  <button className="btn btn-sm btn-outline-secondary">Month</button>
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
              <div className="card h-100">
                <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
                  <h5 className="mb-0">Traffic Sources</h5>
                  <small className="text-muted">Distribution of traffic channels</small>
                </div>
                <div className="card-body">
                  <Doughnut data={trafficSourcesData} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card h-100">
                <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
                  <h5 className="mb-0">Device Usage</h5>
                  <small className="text-muted">Sessions by device type</small>
                </div>
                <div className="card-body">
                  <Bar data={deviceData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Popular Pages Card */}
          <div className="card">
            <div className="card-header border-bottom-0 bg-transparent pt-4 px-4">
              <h5 className="mb-0">Popular Pages</h5>
              <small className="text-muted">Most visited pages this month</small>
            </div>
            <div className="card-body px-4">
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead className="text-muted small">
                    <tr>
                      <th>PAGE</th>
                      <th>VIEWS</th>
                      <th>GROWTH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularPages.map((page, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className={`icon-shape bg-light rounded p-2 me-3`}>
                              <FontAwesomeIcon icon={faGlobe} className="text-muted" />
                            </div>
                            <span className="fw-medium">{page.path}</span>
                          </div>
                        </td>
                        <td className="fw-bold">{page.views}</td>
                        <td>
                          <span className="badge bg-success-subtle text-success">
                            <FontAwesomeIcon icon={faArrowTrendUp} className="me-1" />
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
