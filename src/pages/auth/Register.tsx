import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faLock, 
  faUserPlus,
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

const Register: React.FC = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await register(formData);
        navigate('/dashboard/main');
      } catch (error) {
        console.error('Registration error:', error);
        setErrors({
          submit: 'Registration failed. Please try again.'
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
            <h2 className="display-4 fw-bold mb-4">Join QuantumBoard</h2>
            <p className="fs-4 text-white-50">
              Create your account and start exploring our powerful dashboard tools
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
                <h1 className="h3 fw-bold mb-2">Create Account</h1>
                <p className="text-muted">
                  Join our community of professionals
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {errors.submit && (
                  <div className="alert alert-danger" role="alert">
                    <small>{errors.submit}</small>
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <FontAwesomeIcon icon={faUser} className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className={`form-control border-start-0 ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                  </div>
                </div>

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
                      placeholder="Create a password"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-muted" />
                    </span>
                    <input
                      type="password"
                      className={`form-control border-start-0 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      I agree to the{' '}
                      <Link to="/terms" className="text-decoration-none">Terms of Service</Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-decoration-none">Privacy Policy</Link>
                    </label>
                    {errors.acceptTerms && <div className="invalid-feedback d-block">{errors.acceptTerms}</div>}
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
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  )}
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="text-center">
                  <small className="text-muted">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-decoration-none">Sign in</Link>
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

export default Register;
