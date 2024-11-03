import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, {Suspense} from 'react'
import Preloader from './components/Preloader.jsx';
import PropTypes from 'prop-types';




const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
      const token = localStorage.getItem('access_token');
      return !!token;
  };

  if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};



const PublicRoute = ({ children }) => {
  const isAuthenticated = () => {
      const token = localStorage.getItem('access_token');
      return !!token;
  };

  // If authenticated and trying to access login/register, redirect to story
  if (isAuthenticated()) {
      return <Navigate to="/story" replace />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
};

// Lazy load components
const Landing = React.lazy(() => import('./pages/Landing.jsx'))
const TrueFalseGame = React.lazy(() => import('./pages/TrueFalseGame.jsx'))
const TrashSortingGame = React.lazy(() => import('./pages/TrashSortingGame.jsx'))
const FindImpactGame = React.lazy(() => import('./pages/FindImpactGame.jsx'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage.jsx'))
const LoginPage = React.lazy(() => import('./pages/LoginPage.jsx'))

function App() {
  return (
      <Suspense fallback={'...Loading'}>
          <Router>
              <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Preloader />} />
                  <Route 
                      path="/register" 
                      element={
                          <PublicRoute>
                              <RegisterPage />
                          </PublicRoute>
                      } 
                  />
                  <Route 
                      path="/login" 
                      element={
                          <PublicRoute>
                              <LoginPage />
                          </PublicRoute>
                      } 
                  />

                  {/* Protected Routes */}
                  <Route
                      path="/story"
                      element={
                          <ProtectedRoute>
                              <Landing />
                          </ProtectedRoute>
                      }
                  />
                  <Route
                      path="/true-false-game"
                      element={
                          <ProtectedRoute>
                              <TrueFalseGame />
                          </ProtectedRoute>
                      }
                  />
                  <Route
                      path="/find-impact-game"
                      element={
                          <ProtectedRoute>
                              <FindImpactGame />
                          </ProtectedRoute>
                      }
                  />
                  <Route
                      path="/trash-sorting-game"
                      element={
                          <ProtectedRoute>
                              <TrashSortingGame />
                          </ProtectedRoute>
                      }
                  />

                  {/* Optional: Catch all route for 404 */}
                  <Route 
                      path="*" 
                      element={
                          <div className="min-h-screen flex items-center justify-center">
                              <div className="text-teal-800">Page not found!</div>
                          </div>
                      } 
                  />
              </Routes>
          </Router>
      </Suspense>
  );
}
 

export default App;
