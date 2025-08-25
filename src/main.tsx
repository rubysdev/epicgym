import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TermeniConditii from './pages/TermeniConditii.tsx';
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate.tsx';
import GDPR from './pages/GDPR.tsx';
import PoliticaCookies from './pages/PoliticaCookies.tsx';
import Contact from './pages/Contact.tsx';
import Cariere from './pages/Cariere.tsx';
import Parteneri from './pages/Parteneri.tsx';
import Reclamatii from './pages/Reclamatii.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termeni-conditii" element={<TermeniConditii />} />
        <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cariere" element={<Cariere />} />
        <Route path="/parteneri" element={<Parteneri />} />
        <Route path="/reclamatii" element={<Reclamatii />} />
      </Routes>
    </Router>
  </StrictMode>
);
