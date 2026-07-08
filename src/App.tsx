/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="case-study" element={<CaseStudy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-3xl font-bold text-slate-400">404 - Page Not Found</div>} />
    </Route>
  )
);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
