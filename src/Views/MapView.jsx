import React, { useState } from 'react';

const MapView = () => {
    const [isDetailsPanelOpen, setDetailsPanelOpen] = useState(false);
    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gray-300">
                <img src="https://placehold.co/1200x800/e0e7ff/4338ca?text=Map+Interface" className="w-full h-full object-cover" alt="Geographical map interface." />
                <div className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-full cursor-pointer" onClick={() => setDetailsPanelOpen(true)}>
                    <svg className="w-8 h-8 fill-red-500 stroke-white stroke-2 hover:scale-125 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                </div>
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md flex space-x-2">
                <button className="px-3 py-1.5 text-sm font-semibold text-white bg-sky-700 rounded-md">Citizen Pins</button>
                <button className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white rounded-md">Verified Pins</button>
            </div>
            
            <div className={`absolute top-4 right-4 z-10 w-96 bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isDetailsPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <button onClick={() => setDetailsPanelOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                   <span className="sr-only">Close details panel</span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
               <h3 className="font-bold text-xl text-gray-800 mb-2">Report #R-7832</h3>
               <img src="https://placehold.co/400x200/a5b4fc/1e1b4b?text=Evidence+Media" className="rounded-md" alt="Evidence of coastal flooding."/>
               <div className="flex space-x-2 pt-4 mt-4 border-t border-gray-200">
                   <button style={{minHeight: '44px'}} className="flex-1 bg-green-600 text-white font-bold rounded-md hover:bg-green-700">Verify / सत्यापित करें</button>
                   <button style={{minHeight: '44px'}} className="flex-1 bg-red-600 text-white font-bold rounded-md hover:bg-red-700">Reject / अस्वीकार</button>
               </div>
            </div>
        </div>
    );
}

export default MapView;
