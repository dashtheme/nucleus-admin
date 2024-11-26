import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrochip,
  faMemory,
  faDatabase,
  faNetworkWired,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceDashboard: React.FC = () => {
  // Performance Stats
  const stats = [
    {
      title: 'CPU Usage',
      value: '45%',
      status: 'Normal',
      icon: faMicrochip,
      color: 'success'
    },
    {
      title: 'Memory Usage',
      value: '72%',
      status: 'Warning',
      icon: faMemory,
      color: 'warning'
    },
    {
      title: 'Disk Space',
      value: '85%',
      status: 'Critical',
      icon: faDatabase,
      color: 'danger'
    },
    {
      title: 'Network',
      value: '320 Mbps',
      status: 'Normal',
      icon: faNetworkWired,
      color: 'info'
    }
  ];

  // CPU Usage Data
  const cpuData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'CPU Usage %',
        data: [45, 52, 38, 65, 42, 48],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
      }
    ],
  };

  // Memory Usage Data
  const memoryData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Memory Usage GB',
        data: [12.5, 14.2, 13.8, 15.5, 14.8, 16.2],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
      }
    ],
  };

  // Server Response Times
  const responseData = {
    labels: ['API 1', 'API 2', 'API 3', 'API 4', 'API 5', 'API 6'],
    datasets: [
      {
        label: 'Response Time (ms)',
        data: [120, 85, 140, 95, 110, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      }
    ],
  };

  // System Alerts
  const alerts = [
    {
      id: 'ALT-001',
      message: 'High memory usage detected on Server 1',
      severity: 'Warning',
      time: '10 mins ago'
    },
    {
      id: 'ALT-002',
      message: 'Database connection pool near capacity',
      severity: 'Critical',
      time: '15 mins ago'
    },
    {
      id: 'ALT-003',
      message: 'API response time exceeded threshold',
      severity: 'Warning',
      time: '25 mins ago'
    },
    {
      id: 'ALT-004',
      message: 'Disk space usage above 85%',
      severity: 'Critical',
      time: '30 mins ago'
    }
  ];

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

  return (
    <div className="performance-dashboard p-3">
      {/* Stats Row */}
      <div className="row g-3 mb-3">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-sm-6 col-xl-3">
            <div className={`card border-${stat.color} border-start border-4`}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <h6 className="text-muted mb-2">{stat.title}</h6>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0 me-2">{stat.value}</h4>
                      <small className={`text-${stat.color}`}>{stat.status}</small>
                    </div>
                  </div>
                  <div className={`icon-shape bg-${stat.color}-light rounded p-3`}>
                    <FontAwesomeIcon icon={stat.icon} className={`text-${stat.color}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="row g-3 mb-3">
        <div className="col-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">CPU Usage</h5>
            </div>
            <div className="card-body">
              <Line data={cpuData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Memory Usage</h5>
            </div>
            <div className="card-body">
              <Line data={memoryData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Response Times and Alerts Row */}
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">API Response Times</h5>
            </div>
            <div className="card-body">
              <Bar data={responseData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">System Alerts</h5>
              <span className="badge bg-danger">{alerts.length} Active</span>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Alert ID</th>
                      <th>Message</th>
                      <th>Severity</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts.map((alert, index) => (
                      <tr key={index}>
                        <td>{alert.id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon 
                              icon={faExclamationTriangle} 
                              className={`text-${alert.severity === 'Critical' ? 'danger' : 'warning'} me-2`}
                            />
                            {alert.message}
                          </div>
                        </td>
                        <td>
                          <span className={`badge bg-${alert.severity === 'Critical' ? 'danger' : 'warning'}`}>
                            {alert.severity}
                          </span>
                        </td>
                        <td>{alert.time}</td>
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

export default PerformanceDashboard;
