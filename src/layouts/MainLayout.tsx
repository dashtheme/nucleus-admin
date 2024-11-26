import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Dashboard from '../pages/dashboards/Dashboard';
import AnalyticsDashboard from '../pages/dashboards/AnalyticsDashboard';
import EcommerceDashboard from '../pages/dashboards/EcommerceDashboard';
import PerformanceDashboard from '../pages/dashboards/PerformanceDashboard';
import SalesDashboard from '../pages/dashboards/SalesDashboard';
import ComponentsLayout from '../pages/components/ComponentsLayout';
import UserList from '../pages/users/UserList';
import Forms from '../pages/forms/Forms';
import Tables from '../pages/tables/Tables';
import Settings from '../pages/settings/Settings';
import Profile from '../pages/profile/Profile';

const MainLayout: React.FC = () => {
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
          <Sidebar  theme='light'/>
        </div>
        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: sidebarOpen ? '0' : '-240px' // Adjust this value based on your sidebar width
        }}>
          <div style={{ flex: 1, padding: '1.5rem', width: '100%' }}>
            <Routes>
              {/* Dashboard Routes */}
              <Route path="/" element={<Navigate to="/dashboard/main" replace />} />
              <Route path="/dashboard/main" element={<Dashboard />} />
              <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />
              <Route path="/dashboard/ecommerce" element={<EcommerceDashboard />} />
              <Route path="/dashboard/performance" element={<PerformanceDashboard />} />
              <Route path="/dashboard/sales" element={<SalesDashboard />} />

              {/* Component Routes */}
              <Route path="/components/*" element={<ComponentsLayout />} />

              {/* Other Routes */}
              <Route path="/users" element={<UserList />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/dashboard/main" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
