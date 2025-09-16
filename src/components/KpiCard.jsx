import React from 'react';
import { SparklineChart } from './charts/SparklineChart';

export const KpiCard = ({ title, value, change, changeType, chartData, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <div className="flex items-baseline justify-between mt-2">
      <p className="text-3xl font-semibold text-gray-800">{value}</p>
      <div className={`flex items-center font-semibold text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
        {changeType === 'positive' ?
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L12 11.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L12 8.414l3.293 3.293a1 1 0 001.414 0z" clipRule="evenodd" /></svg>
        }
        <span>{change}</span>
      </div>
    </div>
    <div className="mt-4 h-12">
      <SparklineChart data={chartData} color={color} />
    </div>
  </div>
);
