import React, { useState, useEffect, useRef } from 'react';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import DashboardView from './Views/DashboardView';
import MapView from './Views/MapView';
import VerificationView from './Views/VerificationView';
import AnalyticsView from './Views/AnalyticsView';
import AlertsView from './Views/AlertsView';
import SettingsView from './Views/SettingsView';
import HelpView from './Views/HelpView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('text-base-size');

  const mainContentRef = useRef(null);
  
  // When view changes, focus main content for screen readers
  useEffect(() => {
    mainContentRef.current?.focus();
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />;
      case 'map': return <MapView />;
      case 'verification': return <VerificationView />;
      case 'analytics': return <AnalyticsView />;
      case 'alerts': return <AlertsView />;
      case 'settings': return <SettingsView {...{highContrast, setHighContrast, fontSize, setFontSize}}/>;
      case 'help': return <HelpView />;
      default: return <DashboardView />;
    }
  };
  
  return (
    <div className={`font-sans bg-gray-100 ${highContrast ? 'high-contrast' : ''} ${fontSize}`}>
      <style>{`
        .high-contrast { background-color: #000; color: #fff; }
        .high-contrast .bg-white, .high-contrast .bg-gray-100, .high-contrast .bg-slate-50, .high-contrast .bg-slate-100, .high-contrast .bg-blue-50 { background-color: #1a1a1a; color: #fff; border-color: #555; }
        .high-contrast .text-gray-800, .high-contrast .text-gray-600, .high-contrast .text-slate-700, .high-contrast .text-slate-500, .high-contrast .text-gray-500, .high-contrast .text-blue-800 { color: #f0f0f0; }
        .high-contrast .border-gray-200, .high-contrast .divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: #555; }
        .high-contrast .shadow-md { box-shadow: 0 0 0 1px #555; }
        .text-base-size { font-size: 16px; line-height: 1.5; }
        .text-lg-size { font-size: 18px; line-height: 1.5; }
        .text-xl-size { font-size: 20px; line-height: 1.5; }
      `}</style>

      <a href="#main-content" className="absolute top-[-40px] left-0 bg-sky-700 text-white p-2 z-50 transition-all focus:top-0">Skip to main content</a>
      <div className="flex h-screen">
        <Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main id="main-content" ref={mainContentRef} tabIndex="-1" className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 focus:outline-none">
            {renderView()}
          </main>
        </div>
      </div>
    </div>
  );
}
