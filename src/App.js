import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import About from "./components/About";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import CareersPage from "./components/CareersPage";
import BlogPage from "./components/BlogPage";
import AIAgentsPage from "./components/AIAgentsPage";
import DocsPage from "./components/DocsPage";
import PricingPage from "./components/PricingPage";
import EnquiryPage from "./components/EnquiryPage"; // Import the new EnquiryPage component

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [auth]);

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

const AppLayout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === '/dashboard';
  const isEnquiryRoute = location.pathname === '/enquiry'; // Check if current route is enquiry page
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Show header on all routes except dashboard and enquiry page
  const shouldShowHeader = !isDashboardRoute && !isEnquiryRoute;

  return (
    <div className="bg-black">
      {shouldShowHeader && <Header isAuthenticated={isAuthenticated} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Info />
              <Form />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Features />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" replace /> :
              <AuthForm />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/careers"
          element={<CareersPage />}
        />
        <Route
          path="/blog/:id"
          element={<BlogPage />}
        />
        <Route
          path="/aiagents"
          element={<AIAgentsPage />}
        />
        <Route
          path="/docs"
          element={<DocsPage />}
        />
        <Route
          path="/pricing"
          element={<PricingPage />}
        />
        {/* Add new Enquiry Page route */}
        <Route
          path="/enquiry"
          element={<EnquiryPage />}
        />
        {/* Catch-all route for unknown paths */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;