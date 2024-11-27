import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <Routes>
            <Route path="/auth/*" element={<AuthLayout />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
