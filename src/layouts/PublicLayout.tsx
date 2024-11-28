import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import Dashboard from '../pages/dashboards/Dashboard';
import AnalyticsDashboard from '../pages/dashboards/AnalyticsDashboard';
import EcommerceDashboard from '../pages/dashboards/EcommerceDashboard';
import PerformanceDashboard from '../pages/dashboards/PerformanceDashboard';
import SalesDashboard from '../pages/dashboards/SalesDashboard';

const PublicLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <Header onToggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', flex: 1, minHeight: 0, width: '100%' }}>
        <div style={{ 
          transition: 'transform 0.3s ease-in-out',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          position: 'relative',
          zIndex: 1000
        }}>
          <Sidebar />
        </div>
        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: sidebarOpen ? '0' : '-240px'
        }}>
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard/main" element={<Dashboard />} />
              <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />
              <Route path="/dashboard/sales" element={<SalesDashboard />} />
              <Route path="/dashboard/ecommerce" element={<EcommerceDashboard />} />
              <Route path="/dashboard/performance" element={<PerformanceDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
