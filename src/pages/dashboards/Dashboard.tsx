import { 
  faUsers,
  faChartLine,
  faShoppingCart,
  faArrowUp,
  faArrowDown,
  faComments,
  faCheck,
  faCircle,
  faBoxOpen,
  faClock,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  // Recent Activities Data
  const activities = [
    {
      id: 1,
      action: 'New order received',
      time: '5 minutes ago',
      type: 'order',
    },
    {
      id: 2,
      action: 'Server CPU usage high',
      time: '15 minutes ago',
      type: 'system',
    },
    {
      id: 3,
      action: 'New user registered',
      time: '1 hour ago',
      type: 'user',
    },
    {
      id: 4,
      action: 'Product stock low',
      time: '2 hours ago',
      type: 'inventory',
    },
  ];

  // Top Products Data
  const topProducts = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      sales: 245,
      revenue: '$12,450',
      trend: 'up',
    },
    {
      id: 2,
      name: 'Smart Watch',
      sales: 190,
      revenue: '$9,500',
      trend: 'up',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      sales: 175,
      revenue: '$4,375',
      trend: 'down',
    },
    {
      id: 4,
      name: 'USB-C Hub',
      sales: 156,
      revenue: '$3,900',
      trend: 'up',
    },
  ];

  // Tasks Data
  const tasks = [
    {
      id: 1,
      title: 'Review new orders',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Update inventory',
      status: 'completed',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Customer support meeting',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 4,
      title: 'Check server logs',
      status: 'pending',
      priority: 'low',
    },
  ];

  // System Health Data
  const systemHealth = [
    {
      name: 'Server CPU',
      value: 68,
      status: 'warning',
    },
    {
      name: 'Memory Usage',
      value: 42,
      status: 'success',
    },
    {
      name: 'Storage',
      value: 85,
      status: 'danger',
    },
    {
      name: 'Network',
      value: 25,
      status: 'success',
    },
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
              <div className="chartjs-size-monitor">
                <canvas id="trafficChart" width="200" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Widgets Row */}
      <div className="row g-3">
        {/* Recent Activities */}
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Recent Activities</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {activities.map((activity) => (
                  <div key={activity.id} className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="activity-icon me-3">
                        <FontAwesomeIcon icon={faClock} className="text-primary" />
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-bold">{activity.action}</div>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Top Products</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {topProducts.map((product) => (
                  <div key={product.id} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-0">{product.name}</h6>
                        <small className="text-muted">{product.sales} sales</small>
                      </div>
                      <div className="text-end">
                        <div>{product.revenue}</div>
                        <small className={`text-${product.trend === 'up' ? 'success' : 'danger'}`}>
                          <FontAwesomeIcon icon={product.trend === 'up' ? faArrowUp : faArrowDown} />
                          {' '}
                          {product.trend === 'up' ? '+' : '-'}2.5%
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Tasks</h5>
              <button className="btn btn-primary btn-sm">Add Task</button>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {tasks.map((task) => (
                  <div key={task.id} className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <FontAwesomeIcon 
                          icon={task.status === 'completed' ? faCheck : faCircle} 
                          className={`text-${task.status === 'completed' ? 'success' : 'muted'}`}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className={task.status === 'completed' ? 'text-muted text-decoration-line-through' : ''}>
                          {task.title}
                        </div>
                        <small className={`badge bg-${task.priority === 'high' ? 'danger' : task.priority === 'medium' ? 'warning' : 'info'}`}>
                          {task.priority}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">System Health</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {systemHealth.map((item) => (
                  <div key={item.name} className="col-sm-6 col-lg-3">
                    <div className="card bg-light">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="stat-icon">
                            <FontAwesomeIcon icon={faServer} className={`text-${item.status}`} />
                          </div>
                          <div className={`badge bg-${item.status}`}>
                            {item.value}%
                          </div>
                        </div>
                        <h6 className="mb-0">{item.name}</h6>
                        <div className="progress mt-2" style={{ height: '4px' }}>
                          <div 
                            className={`progress-bar bg-${item.status}`} 
                            role="progressbar" 
                            style={{ width: `${item.value}%` }}
                            aria-valuenow={item.value} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>
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
