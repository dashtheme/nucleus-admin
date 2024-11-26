import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faChartLine,
  faShoppingCart,
  faComments,
  faArrowUp,
  faArrowDown,
  faEnvelope,
  faCheckCircle,
  faGlobe,
  faClock,
  faCalendarAlt,
  faTasks,
  faExclamationTriangle,
  faUserPlus,
  faChartPie,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { Line, Doughnut, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
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

  const trafficData = {
    labels: ['Direct', 'Social', 'Referral', 'Organic'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
    }],
  };

  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue',
      data: [4200, 5300, 4800, 6100, 5600, 7200, 6800],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }],
  };

  const conversionData = {
    labels: ['Landing', 'Product', 'Cart', 'Checkout', 'Complete'],
    datasets: [{
      label: 'Conversion',
      data: [1000, 750, 500, 300, 200],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      data: [55, 35, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const tasks = [
    { id: 1, title: 'Review new orders', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Update inventory', priority: 'Medium', status: 'In Progress' },
    { id: 3, title: 'Customer feedback review', priority: 'Low', status: 'Completed' },
  ];

  const alerts = [
    { id: 1, type: 'warning', message: 'Low stock alert: Product XYZ' },
    { id: 2, type: 'danger', message: 'Payment gateway error detected' },
    { id: 3, type: 'info', message: 'System maintenance scheduled' },
  ];

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
              <Doughnut data={trafficData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Charts Row */}
      <div className="row g-3 mb-4">
        <div className="col-xl-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Device Distribution</h5>
            </div>
            <div className="card-body">
              <Pie data={deviceData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Conversion Funnel</h5>
            </div>
            <div className="card-body">
              <Bar data={conversionData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Activity and Tasks Row */}
      <div className="row g-3 mb-4">
        <div className="col-xl-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Recent Activity</h5>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
            <div className="card-body p-0">
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon bg-primary">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">New user registration</p>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon bg-success">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">New order #12345</p>
                    <small className="text-muted">3 hours ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon bg-info">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">New message from John</p>
                    <small className="text-muted">5 hours ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Tasks</h5>
              <button className="btn btn-sm btn-outline-primary">Add Task</button>
            </div>
            <div className="card-body p-0">
              <div className="task-list">
                {tasks.map(task => (
                  <div key={task.id} className="task-item">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">{task.title}</label>
                    </div>
                    <div className="task-meta">
                      <span className={`badge bg-${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                      <small className="text-muted ms-2">{task.status}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">System Alerts</h5>
            </div>
            <div className="card-body p-0">
              <div className="alert-list">
                {alerts.map(alert => (
                  <div key={alert.id} className={`alert-item alert-${alert.type}`}>
                    <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                    <span>{alert.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
