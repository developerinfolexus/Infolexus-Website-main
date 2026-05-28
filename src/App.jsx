import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import { Loader2 } from 'lucide-react';
import Walkthrough from './components/ui/Walkthrough';

// Lazy Load Pages
const Home = lazy(() => import('./pages/homepage/Home'));

const HRServices = lazy(() => import('./pages/hrservicespage/HRServices'));
const HRServiceDetail = lazy(() => import('./pages/hrservicespage/HRServiceDetail'));
const About = lazy(() => import('./pages/aboutpage/About'));
const Technologies = lazy(() => import('./pages/technologiespage/Technologies'));
const Contact = lazy(() => import('./pages/contactpage/Contact'));
const ServiceDetail = lazy(() => import('./pages/servicedetailpage/ServiceDetail'));
const Clients = lazy(() => import('./pages/clientspage/Clients'));
const Career = lazy(() => import('./pages/careerpage/Career'));
const PricingPage = lazy(() => import('./components/ui/AnimatedPricingPage'));
const DigitalMarketing = lazy(() => import('./pages/digitalmarketingpage/DigitalMarketing'));
const DMServiceDetail = lazy(() => import('./pages/digitalmarketingpage/DMServiceDetail'));
const TrainingServiceDetail = lazy(() => import('./pages/trainingspage/TrainingServiceDetail'));
const CollegeTrainings = lazy(() => import('./pages/trainingspage/CollegeTrainings'));
const GraduateTrainings = lazy(() => import('./pages/trainingspage/GraduateTrainings'));
const PlacementSupport = lazy(() => import('./pages/hrservicespage/PlacementSupport'));
const RecruitmentSolutions = lazy(() => import('./pages/hrservicespage/RecruitmentSolutions'));
const AdminApplications = lazy(() => import('./pages/admin/AdminApplications'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <Loader2 className="w-10 h-10 text-white animate-spin" />
  </div>
);

import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showIntro && (
          <Walkthrough key="walkthrough" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/hr-services" element={<HRServices />} />
              <Route path="/hr-services/placement-support" element={<PlacementSupport />} />
              <Route path="/hr-services/recruitment-solutions" element={<RecruitmentSolutions />} />
              <Route path="/hr-services/:id" element={<HRServiceDetail />} />
              <Route path="/dm-services" element={<DigitalMarketing />} />
              <Route path="/dm-services/:id" element={<DMServiceDetail />} />
              <Route path="/trainings/colleges" element={<CollegeTrainings />} />
              <Route path="/trainings/graduates" element={<GraduateTrainings />} />
              <Route path="/trainings/:id" element={<TrainingServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/admin/applications" element={<AdminApplications />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </Router>
  );
}

export default App;
