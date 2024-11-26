import React from 'react';
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

const ComplexCharts: React.FC = () => {
  // Revenue Chart Data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue 2024',
        data: [65, 59, 80, 81, 56, 55, 70, 75, 82, 88, 92, 95],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
      },
      {
        label: 'Revenue 2023',
        data: [45, 52, 60, 65, 50, 48, 62, 68, 71, 75, 78, 82],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
      },
    ],
  };

  // Traffic Sources Data
  const trafficData = {
    labels: ['Organic', 'Direct', 'Referral', 'Social', 'Email', 'Paid Ads'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
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
    <div className="row g-3">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Revenue Overview</h5>
            <div className="btn-group">
              <button className="btn btn-sm btn-outline-secondary">Weekly</button>
              <button className="btn btn-sm btn-outline-secondary active">Monthly</button>
              <button className="btn btn-sm btn-outline-secondary">Yearly</button>
            </div>
          </div>
          <div className="card-body">
            <Line data={revenueData} options={options} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Traffic Sources</h5>
          </div>
          <div className="card-body">
            <Bar data={trafficData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexCharts;
