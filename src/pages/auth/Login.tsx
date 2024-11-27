import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await login(formData.email, formData.password);
        navigate('/dashboard/main');
      } catch (error) {
        console.error('Login error:', error);
        setErrors({
          submit: 'Invalid email or password'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard/main" replace />;
  }

  return (
    <div className="min-vh-100 d-flex">
      {/* Left side - Gradient Background */}
      <div className="d-none d-lg-flex col-lg-6 position-relative" style={{
        background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'
      }}>
        <div className="position-absolute w-100 h-100 opacity-10"></div>
        <div className="position-relative d-flex flex-column align-items-center justify-content-center p-5 text-white w-100">
          <div className="text-center" style={{ maxWidth: '32rem' }}>
            <h2 className="display-4 fw-bold mb-4">Welcome Back</h2>
            <p className="fs-4 text-white-50">
              Sign in to continue your journey with QuantumBoard
            </p>
          </div>
          <div className="position-absolute bottom-0 start-0 end-0 border-bottom border-white opacity-25"></div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-sm-5">
        <div className="w-100" style={{ maxWidth: '32rem' }}>
          <div className="card shadow-sm">
            <div className="card-body p-4 p-sm-5">
              <div className="text-center mb-4">
                <h1 className="h3 fw-bold mb-2">Sign In</h1>
                <p className="text-muted">
                  Access your QuantumBoard dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {errors.submit && (
                  <div className="alert alert-danger" role="alert">
                    <small>{errors.submit}</small>
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-muted" />
                    </span>
                    <input
                      type="email"
                      className={`form-control border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <FontAwesomeIcon icon={faLock} className="text-muted" />
                    </span>
                    <input
                      type="password"
                      className={`form-control border-start-0 ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 mb-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  ) : (
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                  )}
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </button>

                <div className="text-center">
                  <small className="text-muted">
                    Don't have an account?{' '}
                    <Link 
                      to="/auth/register" 
                      className="text-decoration-none"
                    >
                      Create one now
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
