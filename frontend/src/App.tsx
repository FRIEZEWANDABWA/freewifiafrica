import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Amplify } from 'aws-amplify';
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// Pages
import HomePage from './pages/HomePage';
import HubsPage from './pages/HubsPage';
import ProjectsPage from './pages/ProjectsPage';
import SolutionsPage from './pages/SolutionsPage';
import ContentPage from './pages/ContentPage';
import ImpactStoriesPage from './pages/ImpactStoriesPage';
import EducationPortal from './pages/EducationPortal';
import ConnectPage from './pages/ConnectPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AdminDashboard from './pages/AdminDashboard';
import UserPortal from './pages/UserPortal';
import ContentModerationPage from './pages/ContentModerationPage';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// AWS Amplify configuration (to be configured)
// Amplify.configure(awsExports);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hubs" element={<HubsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/impact" element={<ImpactStoriesPage />} />
            <Route path="/education" element={<EducationPortal />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/portal" element={<UserPortal />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/moderation" element={<ContentModerationPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;