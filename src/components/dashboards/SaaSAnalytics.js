import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';
import MiniSparkline from '../ui/MiniSparkline';
import {
  saasKPIs, saasMRRData, saasChurnData, saasUserGrowth,
  saasRevenueByPlan, saasActivityFeed
} from '../../config/dashboardData';

const timeRanges = ['7D', '30D', '90D', '1Y'];

const KPICard = ({ kpi }) => (
  <div className="glass-card p-5 rounded-xl">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-content-tertiary uppercase tracking-wider">{kpi.label}</span>
      <span className={`text-xs font-medium flex items-center gap-1 ${kpi.positive ? 'text-google-green' : 'text-google-red'}`}>
        {kpi.positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {kpi.change}
      </span>
    </div>
    <div className="text-2xl font-bold text-content-primary mb-3">{kpi.value}</div>
    <MiniSparkline data={kpi.sparkline} color="#4285F4" height={35} />
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg p-3 rounded-lg text-xs">
      <p className="text-content-secondary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }} className="font-medium">
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

const SaaSAnalytics = () => {
  const [timeRange, setTimeRange] = useState('1Y');
  const [activePieIndex, setActivePieIndex] = useState(null);

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-content-primary">SaaS Metrics Overview</h3>
        <div className="flex gap-1 glass-card rounded-lg p-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                timeRange === range
                  ? 'bg-accent/10 text-accent'
                  : 'text-content-secondary hover:text-content-primary'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {saasKPIs.map((kpi) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <KPICard kpi={kpi} />
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MRR Area Chart */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Monthly Recurring Revenue ($K)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={saasMRRData}>
              <defs>
                <linearGradient id="mrrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4285F4" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#4285F4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="mrr" stroke="#4285F4" strokeWidth={2} fill="url(#mrrGradient)" name="MRR" />
              <Line type="monotone" dataKey="target" stroke="#9aa0a6" strokeDasharray="5 5" strokeWidth={1.5} dot={false} name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Churn Line Chart */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Churn Rate (%)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={saasChurnData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} domain={[2, 3.5]} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="churn" stroke="#EA4335" strokeWidth={2.5} dot={{ r: 3, fill: '#EA4335' }} name="Churn %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Growth Stacked Area */}
        <div className="glass-card p-5 rounded-xl lg:col-span-2">
          <h4 className="text-sm font-semibold text-content-primary mb-4">User Growth by Plan (K)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={saasUserGrowth}>
              <defs>
                <linearGradient id="freeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FBBC05" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#FBBC05" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="proGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4285F4" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#4285F4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="entGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34A853" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#34A853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11, color: '#5f6368' }} />
              <Area type="monotone" dataKey="enterprise" stackId="1" stroke="#34A853" fill="url(#entGrad)" name="Enterprise" />
              <Area type="monotone" dataKey="pro" stackId="1" stroke="#4285F4" fill="url(#proGrad)" name="Pro" />
              <Area type="monotone" dataKey="free" stackId="1" stroke="#FBBC05" fill="url(#freeGrad)" name="Free" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Plan Donut */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Revenue by Plan</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={saasRevenueByPlan}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                onMouseEnter={(_, index) => setActivePieIndex(index)}
                onMouseLeave={() => setActivePieIndex(null)}
              >
                {saasRevenueByPlan.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                    stroke="transparent"
                    style={{
                      transform: activePieIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transformOrigin: 'center',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  return (
                    <div className="bg-white border border-gray-200 shadow-lg p-2 rounded text-xs">
                      <span className="text-content-primary">{payload[0].name}: {payload[0].value}%</span>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {saasRevenueByPlan.map((plan) => (
              <div key={plan.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: plan.color }} />
                  <span className="text-content-secondary">{plan.name}</span>
                </div>
                <span className="text-content-primary font-medium">{plan.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="text-sm font-semibold text-content-primary mb-4 flex items-center gap-2">
          <Activity size={14} className="text-accent" />
          Live Activity Feed
        </h4>
        <div className="space-y-3">
          {saasActivityFeed.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-sm"
            >
              <Clock size={12} className="text-content-tertiary flex-shrink-0" />
              <span className="text-content-tertiary text-xs min-w-[70px]">{item.time}</span>
              <span className="text-content-secondary">{item.event}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SaaSAnalytics);
