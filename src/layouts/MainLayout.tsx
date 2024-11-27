import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import NotFound from '../pages/error/NotFound';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <Header onToggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', flex: 1, minHeight: 0, width: '100%', position: 'relative' }}>
        <div style={{ 
          position: window.innerWidth < 768 ? 'absolute' : 'relative',
          height: '100%',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1000,
          boxShadow: window.innerWidth < 768 && sidebarOpen ? '0 0 15px rgba(0,0,0,0.1)' : 'none'
        }}>
          <Sidebar theme='light' />
        </div>
        
        {/* Overlay for mobile */}
        {window.innerWidth < 768 && sidebarOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%',
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

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
