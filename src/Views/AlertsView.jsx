import React from 'react';

const AlertsView = () => (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Alerts & Notifications</h1>
       <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Compose Alert</h3>
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="e.g., High tide warning..."></textarea>
            </div>
             <div className="flex justify-end space-x-3 pt-4 border-t">
                <button type="button" className="px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-md">Preview</button>
                <button type="submit" className="px-6 py-2.5 bg-sky-600 text-white font-semibold rounded-md">Send Alert</button>
            </div>
        </form>
       </div>
    </>
);

export default AlertsView;
