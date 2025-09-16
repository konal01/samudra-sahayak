import React from 'react';
import dayjs from 'dayjs';
import { verificationData } from '../data/mockData';

const VerificationView = () => {
  const severityMap = {
      'High': 'bg-red-100 text-red-800', 'Medium': 'bg-amber-100 text-amber-800', 'Low': 'bg-green-100 text-green-800'
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Verification Queue</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-md text-sm">Bulk Verify</button>
          </div>
        </div>
        <div className="overflow-auto" style={{maxHeight: '65vh'}}>
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-slate-50 z-10">
              <tr className="text-sm text-gray-600">
                <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                <th className="p-4 font-medium">Evidence</th><th className="p-4 font-medium">Details</th>
                <th className="p-4 font-medium">Severity</th><th className="p-4 font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {verificationData.map(item => (
                <tr key={item.reportId} className="hover:bg-slate-50">
                  <td className="p-4"><input type="checkbox" className="rounded"/></td>
                  <td className="p-4"><img src="https://placehold.co/100x60/dbeafe/1e3a8a?text=Media" className="rounded" alt="Evidence thumbnail"/></td>
                  <td className="p-4 text-sm"><p className="font-semibold text-gray-800">{item.reportId}</p><p className="text-gray-600 truncate w-64">"{item.transcript}"</p></td>
                  <td className="p-4"><span className={`px-2 py-1 text-xs font-semibold rounded-full ${severityMap[item.severity]}`}>{item.severity}</span></td>
                  <td className="p-4 text-sm text-gray-500">{dayjs(item.timestamp).format('DD/MM/YY HH:mm')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VerificationView;
