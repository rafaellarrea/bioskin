import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DiagnosticPage from './pages/DiagnosticPage';
import TreatmentsPage from './pages/TreatmentsPage';
import ResultsPage from './pages/ResultsPage';
import GiftCardPage from './pages/GiftCardPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/diagnostico-facial" element={<DiagnosticPage />} />
          <Route path="/tratamientos" element={<TreatmentsPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/gift-card" element={<GiftCardPage />} />
          <Route path="/agenda-cita" element={<BookingPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;