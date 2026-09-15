import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LightHome from './pages/LightHome';
import LightAbout from './pages/LightAbout';
import DarkHome from './pages/DarkHome';
import DarkAbout from './pages/DarkAbout';
import ConceptToggle from './components/common/ConceptToggle';

export default function App() {
  return (
    <BrowserRouter>
      {/* Floating Concept Toggle for Presentation / Review */}
      <ConceptToggle />

      <Routes>
        {/* Default route redirect to Design 1 */}
        <Route path="/" element={<Navigate to="/design-1" replace />} />
        
        {/* Design 1 (Light Artisanal - Cafert Inspired) */}
        <Route path="/design-1" element={<LightHome />} />
        <Route path="/design-1/about" element={<LightAbout />} />
        <Route path="/about" element={<Navigate to="/design-1/about" replace />} />

        {/* Design 2 (Dark Luxury - Elegencia Inspired) */}
        <Route path="/design-2" element={<DarkHome />} />
        <Route path="/design-2/about" element={<DarkAbout />} />
        <Route path="/dark" element={<Navigate to="/design-2" replace />} />
        <Route path="/dark/about" element={<Navigate to="/design-2/about" replace />} />

        {/* Support /madhura-cafe/* prefix if hosted on subdirectory or custom path */}
        <Route path="/madhura-cafe/design-1" element={<LightHome />} />
        <Route path="/madhura-cafe/design-1/about" element={<LightAbout />} />
        <Route path="/madhura-cafe/design-2" element={<DarkHome />} />
        <Route path="/madhura-cafe/design-2/about" element={<DarkAbout />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/design-1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
