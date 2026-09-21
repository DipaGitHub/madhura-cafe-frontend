import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LightHome from './pages/LightHome';
import LightAbout from './pages/LightAbout';
import DarkHome from './pages/DarkHome';
import DarkAbout from './pages/DarkAbout';
import DarkMenu from './pages/DarkMenu';
import DarkMenuDetails from './pages/DarkMenuDetails';
import DarkBlog from './pages/DarkBlog';
import DarkBlogDetails from './pages/DarkBlogDetails';
import DarkContact from './pages/DarkContact';
import FloatingSocials from './components/common/FloatingSocials';

export default function App() {
  return (
    <BrowserRouter>
      <FloatingSocials />
      <Routes>
        {/* Primary Dark Theme Routes */}
        <Route path="/" element={<DarkHome />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<DarkAbout />} />
        <Route path="/menu" element={<DarkMenu />} />
        <Route path="/menu-details" element={<DarkMenuDetails />} />
        <Route path="/menu-details/:id" element={<DarkMenuDetails />} />
        <Route path="/menu/:id" element={<DarkMenuDetails />} />
        <Route path="/blog" element={<DarkBlog />} />
        <Route path="/blog-details" element={<DarkBlogDetails />} />
        <Route path="/blog-details/:id" element={<DarkBlogDetails />} />
        <Route path="/contact" element={<DarkContact />} />

        {/* Route aliases redirecting to dark theme */}
        <Route path="/design-2" element={<Navigate to="/" replace />} />
        <Route path="/design-2/about" element={<Navigate to="/about" replace />} />
        <Route path="/dark" element={<Navigate to="/" replace />} />
        <Route path="/design-1" element={<Navigate to="/" replace />} />
        <Route path="/design-1/about" element={<Navigate to="/about" replace />} />
        <Route path="/light" element={<Navigate to="/" replace />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

