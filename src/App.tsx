import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/dashboards/AnalyticsDashboard';
import UserList from './pages/users/UserList';
import Forms from './pages/forms/Forms';
import Tables from './pages/tables/Tables';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import ComponentsLayout from './pages/components/ComponentsLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/main.css';
import './assets/styles/profile.css';
import './assets/styles/components.css';
import './assets/styles/dashboard.css';

function App() {
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
