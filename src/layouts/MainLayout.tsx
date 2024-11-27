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

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden' 
    }}>
      <Header onToggleSidebar={toggleSidebar} />
      <div style={{ 
        display: 'flex', 
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
      }}>
        {isMobile && sidebarOpen && (
          <div 
            onClick={closeSidebar}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
          />
        )}
        <div 
          className={`sidebar-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
          style={{ 
            width: '280px',
            flexShrink: 0,
            zIndex: 1000,
            position: isMobile ? 'fixed' : 'relative',
            top: 0,
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <Sidebar />
        </div>
        <main 
          onClick={closeSidebar}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            backgroundColor: '#f4f6f9',
            zIndex: 1,
            marginLeft: !isMobile && sidebarOpen ? '280px' : 0,
            transition: 'margin-left 0.3s ease-in-out',
            padding: '1.5rem'
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/main" replace />} />
            <Route path="/dashboard/main" element={<Dashboard />} />
            <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />
            <Route path="/dashboard/ecommerce" element={<EcommerceDashboard />} />
            <Route path="/dashboard/performance" element={<PerformanceDashboard />} />
            <Route path="/dashboard/sales" element={<SalesDashboard />} />
            <Route path="/components/*" element={<ComponentsLayout />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
