import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faChartLine,
  faShoppingCart,
  faArrowUp,
  faArrowDown,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="dashboard">
      {/* Quick Stats Row */}
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card primary-gradient">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-1">Users</h6>
                  <h3 className="card-title mb-0">1,234</h3>
                  <small className="trend-up">
                    <FontAwesomeIcon icon={faArrowUp} /> 12.5%
                  </small>
                </div>
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card success-gradient">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-1">Revenue</h6>
                  <h3 className="card-title mb-0">$5,678</h3>
                  <small className="trend-up">
                    <FontAwesomeIcon icon={faArrowUp} /> 8.3%
                  </small>
                </div>
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card warning-gradient">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-1">Orders</h6>
                  <h3 className="card-title mb-0">567</h3>
                  <small className="trend-down">
                    <FontAwesomeIcon icon={faArrowDown} /> 3.2%
                  </small>
                </div>
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card info-gradient">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-1">Comments</h6>
                  <h3 className="card-title mb-0">890</h3>
                  <small className="trend-up">
                    <FontAwesomeIcon icon={faArrowUp} /> 5.7%
                  </small>
                </div>
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faComments} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="row g-3 mb-4">
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Revenue Overview</h5>
              <div className="dropdown">
                <select className="form-select form-select-sm">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
            </div>
            <div className="card-body">
              <Line data={salesData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Traffic Sources</h5>
            </div>
            <div className="card-body">
              <div className="chartjs-size-monitor">
                <canvas id="trafficChart" width="200" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
