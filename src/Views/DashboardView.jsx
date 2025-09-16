import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { kpiData, attentionData, activityLogData } from '../data/mockData';
import { KpiCard } from '../components/KpiCard';

const DashboardView = () => (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpiData.map(item => <KpiCard key={item.title} {...item} />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Needs Attention</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-600">
                  <th className="py-3 px-4 font-medium">Report</th>
                  <th className="py-3 px-4 font-medium">Severity</th>
                  <th className="py-3 px-4 font-medium">Time in Queue</th>
                  <th className="py-3 px-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {attentionData.map(item => (
                  <tr key={item.id} className="text-sm">
                    <td className="p-4"><div className="font-semibold text-gray-800">{item.id}</div><div className="text-xs text-gray-500">{item.source}</div></td>
                    <td className="p-4"><span className={`px-2 py-1 text-xs font-semibold rounded-full ${item.severity === 'High' ? 'bg-red-100 text-red-800' : item.severity === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{item.severity}</span></td>
                    <td className="p-4 text-gray-600">{dayjs(item.time).fromNow()}</td>
                    <td className="p-4"><button className="text-sky-600 font-semibold hover:underline">Verify</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-sm font-medium text-sky-700 hover:text-sky-900">Export</button>
          </div>
          <ul className="space-y-4">
            {activityLogData.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-700"><span className="font-semibold">{item.user}</span> {item.action} <span className="font-semibold">{item.report}</span>.</p>
                  <p className="text-xs text-gray-500">{dayjs(item.time).fromNow()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
);

export default DashboardView;
