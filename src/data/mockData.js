import dayjs from 'dayjs';

export const kpiData = [
  { title: "New Reports (24h)", value: "1,204", change: "+12.5%", changeType: "positive", chartData: [10, 40, 20, 50, 30, 60, 45, 80], color: '#10b981' },
  { title: "% Verified", value: "89.2%", change: "-1.8%", changeType: "negative", chartData: [60, 50, 70, 40, 55, 45, 30, 20], color: '#ef4444' },
  { title: "Open Alerts", value: "17", change: "+2", changeType: "positive", chartData: [5, 10, 8, 12, 10, 15, 12, 17], color: '#38bdf8' },
  { title: "Avg. Verification Time", value: "22m", change: "-3m", changeType: "positive", chartData: [45, 40, 35, 38, 30, 25, 28, 22], color: '#10b981' }
];

export const attentionData = [
    { id: '#R-7821', severity: 'High', time: dayjs().subtract(4, 'hour').toISOString(), source: 'Citizen App'},
    { id: '#R-7815', severity: 'High', time: dayjs().subtract(3, 'hour').toISOString(), source: 'Social Media'},
    { id: '#R-7810', severity: 'Medium', time: dayjs().subtract(2, 'hour').toISOString(), source: 'Citizen App'},
    { id: '#R-7805', severity: 'Low', time: dayjs().subtract(55, 'minute').toISOString(), source: 'Email'},
];

export const activityLogData = [
    { user: 'A. Gupta', action: 'verified', report: '#R-7798', time: dayjs().subtract(5, 'minute').toISOString() },
    { user: 'S. Patel', action: 'flagged', report: '#R-7801', time: dayjs().subtract(12, 'minute').toISOString() },
    { user: 'System', action: 'sent alert', report: 'High Tide Warning', time: dayjs().subtract(25, 'minute').toISOString() },
    { user: 'R. Sharma', action: 'rejected', report: '#R-7790', time: dayjs().subtract(45, 'minute').toISOString() },
];

export const verificationData = [
    { reportId: '#V-9901', transcript: "Water level rising fast at Colaba causeway.", severity: 'High', timestamp: dayjs().subtract(15, 'm').toISOString() },
    { reportId: '#V-9902', transcript: "Large tree fallen on East Coast Road.", severity: 'Medium', timestamp: dayjs().subtract(22, 'm').toISOString() },
    { reportId: '#V-9903', transcript: "Unusual amount of plastic waste washed ashore.", severity: 'Low', timestamp: dayjs().subtract(45, 'm').toISOString() },
    { reportId: '#V-9904', transcript: "Fishing net debris creating a hazard for boats.", severity: 'Medium', timestamp: dayjs().subtract(1, 'h').toISOString() },
    { reportId: '#V-9905', transcript: "Severe erosion spotted near the southern cliffs.", severity: 'High', timestamp: dayjs().subtract(2, 'h').toISOString() },
];