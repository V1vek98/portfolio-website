import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import MiniSparkline from '../ui/MiniSparkline';
import {
  nlpKPIs, nlpSentimentTrend, nlpSentimentDonut, nlpTopics,
  nlpWordCloud, nlpModelMetrics, nlpConfusionMatrix
} from '../../config/dashboardData';

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
    <MiniSparkline data={kpi.sparkline} color="#EA4335" height={35} />
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg p-3 rounded-lg text-xs">
      <p className="text-content-secondary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color || entry.stroke }} className="font-medium">
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

const RadialGauge = ({ name, value, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#202124" fontSize="14" fontWeight="bold">
          {value}%
        </text>
      </svg>
      <span className="text-xs text-content-tertiary mt-1">{name}</span>
    </div>
  );
};

const NLPAnalytics = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-content-primary">NLP & AI Model Analytics</h3>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {nlpKPIs.map((kpi) => (
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

      {/* Sentiment Trend + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sentiment Stacked Area */}
        <div className="glass-card p-5 rounded-xl lg:col-span-2">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Sentiment Trend (%)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={nlpSentimentTrend}>
              <defs>
                <linearGradient id="posGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34A853" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#34A853" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="neuGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4285F4" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#4285F4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="negGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EA4335" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#EA4335" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11, color: '#5f6368' }} />
              <Area type="monotone" dataKey="positive" stackId="1" stroke="#34A853" fill="url(#posGrad)" name="Positive" />
              <Area type="monotone" dataKey="neutral" stackId="1" stroke="#4285F4" fill="url(#neuGrad)" name="Neutral" />
              <Area type="monotone" dataKey="negative" stackId="1" stroke="#EA4335" fill="url(#negGrad)" name="Negative" />
              <Line type="monotone" dataKey="score" stroke="#FBBC05" strokeWidth={2} dot={false} name="Score" yAxisId={0} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sentiment Donut */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Sentiment Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={nlpSentimentDonut}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {nlpSentimentDonut.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => {
                  if (!payload?.length) return null;
                  return (
                    <div className="bg-white border border-gray-200 shadow-lg p-2 rounded text-xs">
                      <span className="text-content-primary">{payload[0].name}: {payload[0].value}%</span>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2">
            {nlpSentimentDonut.map((s) => (
              <div key={s.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-content-secondary">{s.name}</span>
                </div>
                <span className="text-content-primary font-medium">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics + Word Cloud */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Topic Distribution */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Topic Distribution</h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={nlpTopics} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis type="category" dataKey="topic" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} width={100} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} name="Reviews">
                {nlpTopics.map((entry) => (
                  <Cell key={entry.topic} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Word Cloud */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Word Cloud</h4>
          <div className="flex flex-wrap gap-3 items-center justify-center min-h-[280px] p-4">
            {nlpWordCloud.map((word, i) => (
              <motion.span
                key={word.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredWord(word.text)}
                onMouseLeave={() => setHoveredWord(null)}
                className="cursor-default transition-transform relative"
                style={{
                  fontSize: `${word.size * 0.35}px`,
                  color: word.color,
                  fontWeight: word.size > 40 ? 700 : 500,
                  transform: hoveredWord === word.text ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {word.text}
                {hoveredWord === word.text && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -20 }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg px-2 py-1 rounded text-xs text-content-primary whitespace-nowrap"
                  >
                    {word.size * 1000} mentions
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Model Metrics + Confusion Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radial Gauges */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-6">Model Performance Metrics</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nlpModelMetrics.map((metric) => (
              <RadialGauge key={metric.name} name={metric.name} value={metric.value} color={metric.color} />
            ))}
          </div>
        </div>

        {/* Confusion Matrix */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Confusion Matrix</h4>
          <div className="flex justify-center">
            <div>
              <div className="flex mb-1">
                <div className="w-20" />
                {nlpConfusionMatrix.labels.map((label) => (
                  <div key={label} className="w-20 text-center text-xs text-content-tertiary">{label}</div>
                ))}
              </div>
              {nlpConfusionMatrix.data.map((row, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-20 text-xs text-content-tertiary text-right pr-2">{nlpConfusionMatrix.labels[i]}</div>
                  {row.map((val, j) => {
                    const isDiagonal = i === j;

                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (i * 3 + j) * 0.1 }}
                        className={`w-20 h-16 flex items-center justify-center text-sm font-bold rounded-md m-0.5 cursor-default relative group ${
                          isDiagonal
                            ? 'bg-green-100 text-google-green'
                            : 'bg-red-50 text-google-red'
                        }`}
                      >
                        {(val * 100).toFixed(0)}%
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg px-2 py-1 rounded text-xs text-content-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {nlpConfusionMatrix.labels[i]} &rarr; {nlpConfusionMatrix.labels[j]}: {(val * 100).toFixed(1)}%
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
              <div className="flex mt-2">
                <div className="w-20" />
                <div className="text-xs text-content-tertiary text-center flex-1">Predicted</div>
              </div>
            </div>
          </div>
          <div className="text-xs text-content-tertiary text-center mt-1">Actual &darr;</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NLPAnalytics);
