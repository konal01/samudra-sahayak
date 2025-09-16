import React from 'react';
import { icons } from '../assets/Icons';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: icons.dashboard },
  { id: 'map', label: 'Map', icon: icons.map },
  { id: 'verification', label: 'Verification', icon: icons.verification },
  { id: 'analytics', label: 'Analytics', icon: icons.analytics },
  { id: 'alerts', label: 'Alerts', icon: icons.alerts },
];

const footerNavItems = [
  { id: 'settings', label: 'Settings', icon: icons.settings },
  { id: 'help', label: 'Help', icon: icons.help },
];

export const Sidebar = ({ activeView, setActiveView, isOpen, setIsOpen }) => (
  <aside className={`w-64 bg-white text-gray-800 flex-shrink-0 flex flex-col border-r border-gray-200 transition-transform duration-300 ease-in-out fixed md:relative z-40 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
    <div className="h-16 flex items-center px-4 border-b border-gray-200">
      <img src="https://placehold.co/40x40/0c4a6e/ffffff?text=MS" alt="Ministry Logo" className="h-10 w-10 rounded-full" />
      <span className="ml-3 font-semibold text-lg text-slate-700">Samudra Sahayak</span>
    </div>
    <nav className="flex-1 px-2 py-4 space-y-2">
      {navItems.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveView(id);
            if(window.innerWidth < 768) setIsOpen(false);
          }}
          className={`flex items-center px-4 py-2.5 rounded-md font-medium ${
            activeView === id ? 'bg-sky-100 text-sky-800' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          <Icon className="w-6 h-6 mr-3" strokeWidth={2}/>
          <span>{label}</span>
        </a>
      ))}
    </nav>
    <div className="px-2 py-4 mt-auto border-t border-gray-200">
      {footerNavItems.map(({ id, label, icon: Icon }) => (
         <a
          key={id}
          href="#"
          onClick={(e) => {
             e.preventDefault();
             setActiveView(id);
             if(window.innerWidth < 768) setIsOpen(false);
          }}
          className={`flex items-center px-4 py-2.5 rounded-md font-medium ${
            activeView === id ? 'bg-sky-100 text-sky-800' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          <Icon className="w-6 h-6 mr-3" strokeWidth={2}/>
          <span>{label}</span>
        </a>
      ))}
    </div>
  </aside>
);
