// Helper to generate monthly data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ============ SAAS ANALYTICS ============
export const saasKPIs = [
  { label: 'MRR', value: '$284.5K', change: '+12.5%', positive: true, sparkline: [180, 195, 210, 225, 238, 245, 252, 260, 268, 275, 280, 284.5].map((v,i) => ({ name: months[i], value: v })) },
  { label: 'Active Users', value: '24.5K', change: '+8.3%', positive: true, sparkline: [18, 19, 19.5, 20, 20.8, 21.5, 22, 22.8, 23.2, 23.8, 24.1, 24.5].map((v,i) => ({ name: months[i], value: v })) },
  { label: 'Churn Rate', value: '2.4%', change: '-0.3%', positive: true, sparkline: [3.2, 3.1, 3.0, 2.9, 2.8, 2.7, 2.65, 2.6, 2.55, 2.5, 2.45, 2.4].map((v,i) => ({ name: months[i], value: v })) },
  { label: 'ARPU', value: '$48.50', change: '+5.2%', positive: true, sparkline: [38, 39.5, 40, 41, 42.5, 43.5, 44.5, 45.5, 46.5, 47, 47.8, 48.5].map((v,i) => ({ name: months[i], value: v })) },
];

export const saasMRRData = months.map((m, i) => ({
  name: m,
  mrr: [180, 195, 210, 225, 238, 245, 252, 260, 268, 275, 280, 284.5][i],
  target: [175, 190, 205, 220, 235, 250, 260, 270, 275, 280, 285, 290][i],
}));

export const saasChurnData = months.map((m, i) => ({
  name: m,
  churn: [3.2, 3.1, 3.0, 2.9, 2.8, 2.7, 2.65, 2.6, 2.55, 2.5, 2.45, 2.4][i],
}));

export const saasUserGrowth = months.map((m, i) => ({
  name: m,
  free: [12, 12.5, 13, 13.2, 13.5, 14, 14.2, 14.5, 14.8, 15, 15.2, 15.5][i],
  pro: [4.5, 4.8, 5, 5.2, 5.5, 5.8, 6, 6.2, 6.5, 6.8, 7, 7.2][i],
  enterprise: [1.5, 1.7, 1.5, 1.6, 1.8, 1.7, 1.8, 2.1, 1.9, 2, 1.9, 1.8][i],
}));

export const saasRevenueByPlan = [
  { name: 'Enterprise', value: 42, color: '#818cf8' },
  { name: 'Pro', value: 35, color: '#6366f1' },
  { name: 'Starter', value: 18, color: '#a78bfa' },
  { name: 'Free Trial', value: 5, color: '#c4b5fd' },
];

export const saasActivityFeed = [
  { time: '2 min ago', event: 'New enterprise signup', type: 'signup' },
  { time: '5 min ago', event: 'Payment received - $299/mo', type: 'payment' },
  { time: '12 min ago', event: 'User upgraded to Pro plan', type: 'upgrade' },
  { time: '18 min ago', event: 'Support ticket resolved', type: 'support' },
  { time: '25 min ago', event: 'New feature deployed v2.4.1', type: 'deploy' },
  { time: '32 min ago', event: '3 new team members added', type: 'signup' },
];

// ============ HOTEL PERFORMANCE ============
export const hotelKPIs = [
  { label: 'Occupancy', value: '78.4%', change: '+3.2%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [65, 68, 72, 74, 76, 82, 85, 84, 78, 75, 72, 78.4][i] })) },
  { label: 'RevPAR', value: '$142.80', change: '+8.1%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [110, 115, 120, 125, 130, 145, 150, 148, 138, 132, 128, 142.8][i] })) },
  { label: 'ADR', value: '$182.30', change: '+4.5%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [160, 162, 165, 168, 170, 175, 180, 178, 175, 172, 170, 182.3][i] })) },
  { label: 'Revenue', value: '$2.84M', change: '+11.2%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 2.8, 2.75, 2.6, 2.55, 2.5, 2.84][i] })) },
];

export const hotelOccupancyTrend = months.map((m, i) => ({
  name: m,
  occupancy: [65, 68, 72, 74, 76, 82, 85, 84, 78, 75, 72, 78.4][i],
  target: [70, 72, 75, 75, 78, 80, 82, 82, 80, 78, 75, 78][i],
}));

export const hotelADRvsRevPAR = months.map((m, i) => ({
  name: m,
  adr: [160, 162, 165, 168, 170, 175, 180, 178, 175, 172, 170, 182.3][i],
  revpar: [110, 115, 120, 125, 130, 145, 150, 148, 138, 132, 128, 142.8][i],
}));

// Heatmap data: 6 properties x 12 months
export const hotelHeatmapData = {
  properties: ['Grand Plaza', 'Seaside Resort', 'Mountain Lodge', 'City Center', 'Airport Inn', 'Lakeside Villa'],
  months,
  data: [
    [72, 75, 78, 80, 82, 88, 92, 90, 85, 80, 76, 82],
    [68, 70, 74, 78, 82, 90, 95, 93, 82, 75, 70, 76],
    [55, 58, 62, 65, 68, 72, 78, 80, 75, 70, 60, 65],
    [80, 82, 85, 84, 83, 85, 88, 87, 84, 82, 80, 85],
    [70, 72, 75, 74, 76, 78, 80, 82, 78, 75, 72, 75],
    [60, 62, 68, 72, 78, 85, 90, 88, 78, 70, 62, 68],
  ],
};

export const hotelMapProperties = [
  { name: 'Grand Plaza', coordinates: [-73.9857, 40.7484], occupancy: 82, revenue: 520000 },
  { name: 'Seaside Resort', coordinates: [-80.1918, 25.7617], occupancy: 76, revenue: 480000 },
  { name: 'Mountain Lodge', coordinates: [-105.2705, 40.0150], occupancy: 65, revenue: 320000 },
  { name: 'City Center', coordinates: [-87.6298, 41.8781], occupancy: 85, revenue: 550000 },
  { name: 'Airport Inn', coordinates: [-118.4085, 33.9416], occupancy: 75, revenue: 410000 },
  { name: 'Lakeside Villa', coordinates: [-81.3792, 28.5383], occupancy: 68, revenue: 380000 },
];

export const hotelPropertyComparison = [
  { name: 'Grand Plaza', occupancy: 82, adr: 195, revpar: 160, satisfaction: 4.5 },
  { name: 'City Center', occupancy: 85, adr: 175, revpar: 149, satisfaction: 4.3 },
  { name: 'Seaside Resort', occupancy: 76, adr: 210, revpar: 160, satisfaction: 4.7 },
  { name: 'Airport Inn', occupancy: 75, adr: 155, revpar: 116, satisfaction: 4.0 },
  { name: 'Lakeside Villa', occupancy: 68, adr: 185, revpar: 126, satisfaction: 4.4 },
  { name: 'Mountain Lodge', occupancy: 65, adr: 165, revpar: 107, satisfaction: 4.6 },
];

// ============ SUPPLY CHAIN OPS ============
export const supplyChainKPIs = [
  { label: 'On-Time Delivery', value: '96.8%', change: '+1.2%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [92, 93, 93.5, 94, 94.5, 95, 95.5, 96, 96.2, 96.4, 96.6, 96.8][i] })) },
  { label: 'Fill Rate', value: '94.2%', change: '+2.1%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [88, 89, 90, 90.5, 91, 91.5, 92, 92.5, 93, 93.5, 94, 94.2][i] })) },
  { label: 'Inventory Turnover', value: '8.4x', change: '+0.6', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [7, 7.2, 7.4, 7.5, 7.6, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4][i] })) },
  { label: 'Lead Time', value: '4.2 days', change: '-0.8', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [6, 5.8, 5.5, 5.3, 5.1, 5, 4.8, 4.7, 4.5, 4.4, 4.3, 4.2][i] })) },
];

export const supplyChainForecast = months.map((m, i) => ({
  name: m,
  actual: i < 9 ? [420, 445, 460, 480, 500, 520, 510, 530, 545][i] : null,
  forecast: [415, 440, 455, 475, 495, 515, 525, 535, 548, 560, 575, 590][i],
  upper: [430, 460, 475, 500, 520, 540, 550, 560, 575, 595, 615, 640][i],
  lower: [400, 420, 435, 450, 470, 490, 500, 510, 520, 525, 535, 540][i],
}));

export const supplyChainInventory = [
  { name: 'Raw Steel', current: 85, min: 50, max: 100, unit: 'tons', critical: false },
  { name: 'Bearings', current: 32, min: 40, max: 120, unit: 'K units', critical: true },
  { name: 'Seals', current: 68, min: 30, max: 100, unit: 'K units', critical: false },
  { name: 'Motors', current: 45, min: 20, max: 80, unit: 'units', critical: false },
  { name: 'Impellers', current: 18, min: 25, max: 60, unit: 'units', critical: true },
  { name: 'Casings', current: 52, min: 15, max: 70, unit: 'units', critical: false },
];

export const supplyChainRadar = [
  { metric: 'Quality', value: 92, fullMark: 100 },
  { metric: 'Speed', value: 88, fullMark: 100 },
  { metric: 'Cost', value: 78, fullMark: 100 },
  { metric: 'Flexibility', value: 85, fullMark: 100 },
  { metric: 'Reliability', value: 95, fullMark: 100 },
  { metric: 'Innovation', value: 82, fullMark: 100 },
];

export const supplyChainSuppliers = [
  { name: 'MetalWorks Inc', onTime: 98, quality: 96, cost: 85, rating: 'A' },
  { name: 'BearingPro', onTime: 94, quality: 92, cost: 88, rating: 'A-' },
  { name: 'SealTech', onTime: 91, quality: 89, cost: 92, rating: 'B+' },
  { name: 'MotorCraft', onTime: 96, quality: 94, cost: 78, rating: 'A' },
  { name: 'CastFlow', onTime: 88, quality: 90, cost: 95, rating: 'B+' },
];

export const supplyChainFunnel = [
  { stage: 'Orders Received', value: 1250, color: '#10b981' },
  { stage: 'Processing', value: 1180, color: '#34d399' },
  { stage: 'Manufacturing', value: 1050, color: '#6ee7b7' },
  { stage: 'Quality Check', value: 980, color: '#a7f3d0' },
  { stage: 'Shipped', value: 945, color: '#d1fae5' },
];

// ============ NLP ANALYTICS ============
export const nlpKPIs = [
  { label: 'Reviews Analyzed', value: '1.2M', change: '+156K', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [680, 720, 780, 820, 880, 920, 960, 1000, 1050, 1100, 1150, 1200][i] })) },
  { label: 'Avg Sentiment', value: '0.72', change: '+0.04', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.70, 0.71, 0.71, 0.72][i] })) },
  { label: 'Model Accuracy', value: '94.7%', change: '+1.2%', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [90, 90.5, 91, 91.5, 92, 92.5, 93, 93.3, 93.6, 94, 94.3, 94.7][i] })) },
  { label: 'F1 Score', value: '0.923', change: '+0.015', positive: true, sparkline: months.map((m,i) => ({ name: m, value: [0.88, 0.885, 0.89, 0.895, 0.90, 0.905, 0.91, 0.912, 0.915, 0.918, 0.920, 0.923][i] })) },
];

export const nlpSentimentTrend = months.map((m, i) => ({
  name: m,
  positive: [45, 46, 48, 50, 52, 54, 55, 56, 57, 58, 59, 60][i],
  neutral: [35, 34, 33, 32, 31, 30, 29, 29, 28, 28, 27, 27][i],
  negative: [20, 20, 19, 18, 17, 16, 16, 15, 15, 14, 14, 13][i],
  score: [0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.70, 0.71, 0.71, 0.72][i],
}));

export const nlpSentimentDonut = [
  { name: 'Positive', value: 60, color: '#10b981' },
  { name: 'Neutral', value: 27, color: '#6366f1' },
  { name: 'Negative', value: 13, color: '#ef4444' },
];

export const nlpTopics = [
  { topic: 'Product Quality', count: 285000, sentiment: 0.82, color: '#10b981' },
  { topic: 'Customer Service', count: 210000, sentiment: 0.65, color: '#6366f1' },
  { topic: 'Pricing', count: 180000, sentiment: 0.45, color: '#ef4444' },
  { topic: 'Delivery', count: 165000, sentiment: 0.58, color: '#f59e0b' },
  { topic: 'User Experience', count: 145000, sentiment: 0.78, color: '#8b5cf6' },
  { topic: 'Features', count: 120000, sentiment: 0.71, color: '#06b6d4' },
  { topic: 'Reliability', count: 95000, sentiment: 0.68, color: '#ec4899' },
];

export const nlpWordCloud = [
  { text: 'quality', size: 64, color: '#10b981' },
  { text: 'excellent', size: 52, color: '#6366f1' },
  { text: 'service', size: 48, color: '#8b5cf6' },
  { text: 'delivery', size: 44, color: '#f59e0b' },
  { text: 'price', size: 42, color: '#ef4444' },
  { text: 'recommend', size: 40, color: '#10b981' },
  { text: 'product', size: 56, color: '#06b6d4' },
  { text: 'fast', size: 36, color: '#10b981' },
  { text: 'value', size: 38, color: '#8b5cf6' },
  { text: 'experience', size: 46, color: '#6366f1' },
  { text: 'support', size: 34, color: '#f59e0b' },
  { text: 'reliable', size: 32, color: '#10b981' },
  { text: 'innovative', size: 30, color: '#ec4899' },
  { text: 'expensive', size: 28, color: '#ef4444' },
  { text: 'amazing', size: 36, color: '#10b981' },
  { text: 'responsive', size: 26, color: '#06b6d4' },
  { text: 'intuitive', size: 34, color: '#8b5cf6' },
  { text: 'convenient', size: 28, color: '#10b981' },
  { text: 'frustrating', size: 24, color: '#ef4444' },
  { text: 'satisfied', size: 38, color: '#10b981' },
];

export const nlpModelMetrics = [
  { name: 'Accuracy', value: 94.7, color: '#6366f1' },
  { name: 'Precision', value: 93.2, color: '#8b5cf6' },
  { name: 'Recall', value: 91.5, color: '#a78bfa' },
  { name: 'F1 Score', value: 92.3, color: '#c4b5fd' },
];

export const nlpConfusionMatrix = {
  labels: ['Positive', 'Neutral', 'Negative'],
  data: [
    [0.92, 0.05, 0.03],
    [0.06, 0.88, 0.06],
    [0.04, 0.07, 0.89],
  ],
};
