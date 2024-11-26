import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDollarSign,
  faShoppingCart,
  faUserPlus,
  faBoxOpen,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { Line, Doughnut } from 'react-chartjs-2';

const EcommerceDashboard: React.FC = () => {
  // E-commerce Stats
  const stats = [
    {
      title: 'Total Sales',
      value: '$124.5K',
      increase: '+12.5%',
      icon: faDollarSign,
      color: 'primary'
    },
    {
      title: 'Total Orders',
      value: '2,845',
      increase: '+8.1%',
      icon: faShoppingCart,
      color: 'success'
    },
    {
      title: 'New Customers',
      value: '485',
      increase: '+15.2%',
      icon: faUserPlus,
      color: 'info'
    },
    {
      title: 'Products Sold',
      value: '1,247',
      increase: '+10.4%',
      icon: faBoxOpen,
      color: 'warning'
    }
  ];

  // Sales Overview Data
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12500, 18900, 15600, 22300, 19800, 24500],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
      }
    ],
  };

  // Product Categories Data
  const categoriesData = {
    labels: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Others'],
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

  // Recent Orders
  const recentOrders = [
    {
      id: '#ORD-001',
      product: 'iPhone 13 Pro',
      customer: 'John Doe',
      amount: '$999',
      status: 'Completed'
    },
    {
      id: '#ORD-002',
      product: 'MacBook Air',
      customer: 'Jane Smith',
      amount: '$1,299',
      status: 'Processing'
    },
    {
      id: '#ORD-003',
      product: 'AirPods Pro',
      customer: 'Mike Johnson',
      amount: '$249',
      status: 'Completed'
    },
    {
      id: '#ORD-004',
      product: 'iPad Mini',
      customer: 'Sarah Wilson',
      amount: '$499',
      status: 'Pending'
    }
  ];

  // Top Products
  const topProducts = [
    {
      name: 'iPhone 13 Pro',
      sales: 245,
      revenue: '$244,755',
      growth: '+12.4%'
    },
    {
      name: 'MacBook Air',
      sales: 185,
      revenue: '$240,215',
      growth: '+10.8%'
    },
    {
      name: 'AirPods Pro',
      sales: 324,
      revenue: '$80,676',
      growth: '+15.3%'
    },
    {
      name: 'iPad Mini',
      sales: 142,
      revenue: '$70,858',
      growth: '+8.7%'
    }
  ];

  const lineChartOptions = {
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

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="ecommerce-dashboard p-3">
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
                      <small className="text-success">
                        <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                        {stat.increase}
                      </small>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 text-${stat.color}`}>
                    <FontAwesomeIcon icon={stat.icon} size="2x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="row g-3">
        {/* Left Column - Charts */}
        <div className="col-xl-8">
          {/* Sales Overview */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Sales Overview</h5>
              <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary active">Weekly</button>
                <button className="btn btn-sm btn-outline-secondary">Monthly</button>
                <button className="btn btn-sm btn-outline-secondary">Yearly</button>
              </div>
            </div>
            <div className="card-body">
              <Line data={salesData} options={lineChartOptions} />
            </div>
          </div>

          {/* Product Categories */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Product Categories</h5>
            </div>
            <div className="card-body">
              <Doughnut data={categoriesData} options={doughnutChartOptions} />
            </div>
          </div>
        </div>

        {/* Right Column - Lists */}
        <div className="col-xl-4">
          {/* Recent Orders */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Recent Orders</h5>
              <button className="btn btn-sm btn-primary">View All</button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <small className="text-muted">{order.id}</small>
                          <div className="fw-medium">{order.product}</div>
                          <small className="text-muted">{order.customer}</small>
                        </td>
                        <td className="text-end">
                          <div className="fw-medium">{order.amount}</div>
                          <span className={`badge bg-${order.status === 'Completed' ? 'success' : order.status === 'Processing' ? 'primary' : 'warning'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Top Products</h5>
              <button className="btn btn-sm btn-primary">View All</button>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {topProducts.map((product, index) => (
                  <div key={index} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{product.name}</h6>
                        <small className="text-muted">
                          Sales: {product.sales} | Revenue: {product.revenue}
                        </small>
                      </div>
                      <div className="text-end">
                        <small className="text-success d-block">
                          <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                          {product.growth}
                        </small>
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

export default EcommerceDashboard;
