import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faHandshake,
  faPercent,
  faUserTie,
  faCalendarCheck
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

const SalesDashboard: React.FC = () => {
  // Sales Stats
  const stats = [
    {
      title: 'Total Revenue',
      value: '$845.2K',
      increase: '+12.5%',
      icon: faChartLine,
      color: 'primary'
    },
    {
      title: 'Total Leads',
      value: '1,485',
      increase: '+8.1%',
      icon: faUsers,
      color: 'success'
    },
    {
      title: 'Conversion Rate',
      value: '24.8%',
      increase: '+3.2%',
      icon: faPercent,
      color: 'info'
    },
    {
      title: 'Deals Closed',
      value: '384',
      increase: '+10.4%',
      icon: faHandshake,
      color: 'warning'
    }
  ];

  // Sales Pipeline Data
  const pipelineData = {
    labels: ['Lead', 'Qualified', 'Meeting', 'Proposal', 'Negotiation', 'Closed'],
    datasets: [
      {
        label: 'Number of Deals',
        data: [450, 320, 180, 120, 85, 65],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
      }
    ],
  };

  // Sales by Team Member
  const teamData = {
    labels: ['John Doe', 'Jane Smith', 'Mike Brown', 'Sarah Wilson', 'Tom Clark'],
    datasets: [
      {
        data: [35, 28, 22, 18, 15],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      }
    ],
  };

  // Sales Forecast Data
  const forecastData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actual',
        data: [65000, 75000, 82000, 78000, 88000, 95000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
      {
        label: 'Forecast',
        data: [68000, 72000, 85000, 82000, 90000, 98000],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.4,
        borderDash: [5, 5],
      }
    ],
  };

  // Recent Deals
  const recentDeals = [
    {
      client: 'Acme Corp',
      value: '$125,000',
      rep: 'John Doe',
      status: 'Won',
      date: '2024-02-15'
    },
    {
      client: 'TechStart Inc',
      value: '$85,000',
      rep: 'Jane Smith',
      status: 'Negotiating',
      date: '2024-02-14'
    },
    {
      client: 'Global Services',
      value: '$250,000',
      rep: 'Mike Brown',
      status: 'Proposal',
      date: '2024-02-13'
    },
    {
      client: 'InnovateCo',
      value: '$175,000',
      rep: 'Sarah Wilson',
      status: 'Won',
      date: '2024-02-12'
    }
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="sales-dashboard p-3">
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
                      <small className={`text-${stat.color}`}>{stat.increase}</small>
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
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Recent Deals</h5>
              <button className="btn btn-sm btn-primary">View All</button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Value</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDeals.map((deal, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon 
                              icon={faUserTie} 
                              className="text-muted me-2"
                            />
                            <div>
                              <div className="fw-medium">{deal.client}</div>
                              <small className="text-muted">{deal.rep}</small>
                            </div>
                          </div>
                        </td>
                        <td>{deal.value}</td>
                        <td>
                          <span className={`badge bg-${
                            deal.status === 'Won' ? 'success' : 
                            deal.status === 'Negotiating' ? 'warning' : 
                            'info'
                          }`}>
                            {deal.status}
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
        <div className="col-12 col-xl-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Sales Forecast vs Actual</h5>
            </div>
            <div className="card-body">
              <Line data={forecastData} options={options} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Charts Row */}
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Sales Pipeline</h5>
            </div>
            <div className="card-body">
              <Bar data={pipelineData} options={options} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Sales by Team Member</h5>
            </div>
            <div className="card-body">
              <Doughnut data={teamData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
