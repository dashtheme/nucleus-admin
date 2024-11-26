import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

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
