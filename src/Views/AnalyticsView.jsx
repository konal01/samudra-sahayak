import React from 'react';
import { BarChart } from '../components/charts/BarChart';
import { DoughnutChart } from '../components/charts/DoughnutChart';

const AnalyticsView = () => (
  <>
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Report Volume</h3>
        <BarChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{ label: 'Reports', data: [120, 190, 150, 220, 180, 250, 200], backgroundColor: '#0ea5e9', borderRadius: 4 }]
          }}
          options={{ scales: { y: { beginAtZero: true } } }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sentiment Analysis</h3>
        <DoughnutChart
          data={{
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{ data: [25, 55, 20], backgroundColor: ['#22c55e', '#ef4444', '#64748b'], borderWidth: 0 }]
          }}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  </>
);

export default AnalyticsView;
