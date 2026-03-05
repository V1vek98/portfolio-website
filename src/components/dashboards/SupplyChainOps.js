import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import MiniSparkline from '../ui/MiniSparkline';
import {
  supplyChainKPIs, supplyChainForecast, supplyChainInventory,
  supplyChainRadar, supplyChainSuppliers, supplyChainFunnel
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
    <MiniSparkline data={kpi.sparkline} color="#34A853" height={35} />
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 shadow-lg p-3 rounded-lg text-xs">
      <p className="text-content-secondary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color || entry.stroke }} className="font-medium">
          {entry.name}: {entry.value ?? 'N/A'}
        </p>
      ))}
    </div>
  );
};

const SupplyChainOps = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-content-primary">Supply Chain Operations</h3>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {supplyChainKPIs.map((kpi) => (
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

      {/* Forecast + Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Demand Forecast with Confidence Bands */}
        <div className="glass-card p-5 rounded-xl lg:col-span-2">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Demand Forecast with Confidence Bands</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={supplyChainForecast}>
              <defs>
                <linearGradient id="bandGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34A853" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#34A853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="upper" stroke="none" fill="url(#bandGrad)" name="Upper Bound" />
              <Area type="monotone" dataKey="lower" stroke="none" fill="transparent" name="Lower Bound" />
              <Area type="monotone" dataKey="forecast" stroke="#34A853" strokeWidth={2} strokeDasharray="5 5" fill="none" name="Forecast" />
              <Area type="monotone" dataKey="actual" stroke="#4285F4" strokeWidth={2.5} fill="none" dot={{ r: 3, fill: '#4285F4' }} name="Actual" connectNulls={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Production Radar */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Production Efficiency</h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={supplyChainRadar} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="rgba(0,0,0,0.1)" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#5f6368', fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Score" dataKey="value" stroke="#34A853" fill="#34A853" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory Levels */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="text-sm font-semibold text-content-primary mb-4">Inventory Levels</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplyChainInventory.map((item) => (
            <motion.div
              key={item.name}
              className={`p-4 rounded-lg border ${
                item.critical
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
              animate={item.critical ? { boxShadow: ['0 0 0px rgba(234,67,53,0)', '0 0 15px rgba(234,67,53,0.2)', '0 0 0px rgba(234,67,53,0)'] } : {}}
              transition={item.critical ? { duration: 2, repeat: Infinity } : {}}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-content-primary font-medium">{item.name}</span>
                {item.critical && <AlertTriangle size={14} className="text-google-red" />}
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-3 mb-1">
                <div
                  className={`h-3 rounded-full transition-all ${item.critical ? 'bg-google-red' : 'bg-google-green'}`}
                  style={{ width: `${(item.current / item.max) * 100}%` }}
                />
                {/* Min marker */}
                <div
                  className="absolute top-0 h-3 w-0.5 bg-google-yellow"
                  style={{ left: `${(item.min / item.max) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-content-tertiary">
                <span>{item.current} {item.unit}</span>
                <span>Max: {item.max}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Supplier Table + Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supplier Performance */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Supplier Scorecard</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-content-tertiary border-b border-gray-200">
                  <th className="text-left py-2">Supplier</th>
                  <th className="text-center py-2">On-Time</th>
                  <th className="text-center py-2">Quality</th>
                  <th className="text-center py-2">Cost</th>
                  <th className="text-center py-2">Rating</th>
                </tr>
              </thead>
              <tbody>
                {supplyChainSuppliers.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100 text-sm">
                    <td className="py-3 text-content-primary">{s.name}</td>
                    <td className="py-3 text-center">
                      <div className="inline-flex items-center gap-1">
                        <div className="w-12 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-google-green h-1.5 rounded-full" style={{ width: `${s.onTime}%` }} />
                        </div>
                        <span className="text-xs text-content-secondary">{s.onTime}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <div className="inline-flex items-center gap-1">
                        <div className="w-12 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-google-blue h-1.5 rounded-full" style={{ width: `${s.quality}%` }} />
                        </div>
                        <span className="text-xs text-content-secondary">{s.quality}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <div className="inline-flex items-center gap-1">
                        <div className="w-12 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-google-yellow h-1.5 rounded-full" style={{ width: `${s.cost}%` }} />
                        </div>
                        <span className="text-xs text-content-secondary">{s.cost}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        s.rating.startsWith('A') ? 'bg-green-50 text-google-green' : 'bg-yellow-50 text-google-yellow'
                      }`}>
                        {s.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fulfillment Funnel */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Order Fulfillment Funnel</h4>
          <div className="space-y-3 py-4">
            {supplyChainFunnel.map((stage, i) => {
              const maxValue = supplyChainFunnel[0].value;
              const widthPct = (stage.value / maxValue) * 100;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-content-tertiary">{stage.stage}</span>
                    <span className="text-xs text-content-primary font-medium">{stage.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200/50 rounded-full h-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${widthPct}%` }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className="h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ background: stage.color }}
                    >
                      <span className="text-xs font-medium text-white">
                        {Math.round(widthPct)}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SupplyChainOps);
