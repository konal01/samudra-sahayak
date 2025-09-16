import React from 'react';

export const Header = ({ onMenuClick }) => (
  <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
    <button onClick={onMenuClick} className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
    <div className="hidden sm:block">
      <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
        <p className="text-sm text-blue-800">Since you last logged in: <strong className="font-semibold">3 new alerts</strong>, <strong className="font-semibold">45 reports verified</strong>.</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1 text-sm font-medium">
        <button className="px-2 py-1 rounded-md bg-slate-200 text-slate-800" aria-label="Switch to English">EN</button>
        <button className="px-2 py-1 rounded-md hover:bg-slate-100" aria-label="Switch to Hindi">HI</button>
      </div>
      <div className="relative hidden md:block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </span>
        <input type="search" placeholder="Search reports..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
      </div>
      <div className="relative">
        <button className="flex items-center space-x-2 focus:outline-none" aria-haspopup="true" aria-expanded="false">
          <img src="https://placehold.co/40x40/e2e8f0/334155?text=AV" alt="User avatar" className="h-10 w-10 rounded-full border-2 border-slate-200" />
          <div className="hidden md:block text-left">
            <div className="font-semibold text-slate-700">R. Sharma</div>
            <div className="text-xs text-slate-500">Administrator</div>
          </div>
        </button>
      </div>
    </div>
  </header>
);
