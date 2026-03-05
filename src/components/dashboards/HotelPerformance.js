import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { TrendingUp, TrendingDown } from 'lucide-react';
import MiniSparkline from '../ui/MiniSparkline';
import {
  hotelKPIs, hotelOccupancyTrend, hotelADRvsRevPAR,
  hotelHeatmapData, hotelMapProperties, hotelPropertyComparison
} from '../../config/dashboardData';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

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
    <MiniSparkline data={kpi.sparkline} color="#FBBC05" height={35} />
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

const getHeatmapColor = (value) => {
  if (value >= 90) return 'bg-green-500';
  if (value >= 80) return 'bg-green-400/80';
  if (value >= 70) return 'bg-yellow-400/70';
  if (value >= 60) return 'bg-yellow-500/50';
  return 'bg-red-400/50';
};

const HotelPerformance = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-content-primary">Hotel Performance Metrics</h3>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hotelKPIs.map((kpi) => (
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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Occupancy Trend */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Occupancy Trend (%)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={hotelOccupancyTrend}>
              <defs>
                <linearGradient id="occGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FBBC05" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#FBBC05" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} domain={[60, 90]} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="occupancy" stroke="#FBBC05" strokeWidth={2} fill="url(#occGrad)" name="Occupancy" />
              <Area type="monotone" dataKey="target" stroke="#9aa0a6" strokeDasharray="5 5" fill="none" name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ADR vs RevPAR */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">ADR vs RevPAR ($)</h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={hotelADRvsRevPAR}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: '#5f6368', fontSize: 11 }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11, color: '#5f6368' }} />
              <Bar dataKey="adr" fill="#FBBC05" radius={[4, 4, 0, 0]} name="ADR" />
              <Bar dataKey="revpar" fill="#34A853" radius={[4, 4, 0, 0]} name="RevPAR" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="text-sm font-semibold text-content-primary mb-4">Occupancy Heatmap by Property</h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left text-xs text-content-tertiary pb-3 pr-4">Property</th>
                {hotelHeatmapData.months.map((m) => (
                  <th key={m} className="text-center text-xs text-content-tertiary pb-3 px-1">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hotelHeatmapData.properties.map((prop, propIndex) => (
                <tr key={prop} className="group">
                  <td className="text-xs text-content-secondary py-1 pr-4 whitespace-nowrap">{prop}</td>
                  {hotelHeatmapData.data[propIndex].map((val, monthIndex) => (
                    <td key={monthIndex} className="px-1 py-1">
                      <div
                        className={`w-full h-8 rounded ${getHeatmapColor(val)} flex items-center justify-center text-xs font-medium text-white cursor-default transition-transform hover:scale-110`}
                        title={`${prop} - ${hotelHeatmapData.months[monthIndex]}: ${val}%`}
                      >
                        {val}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Map and Property Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* US Map */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Property Locations</h4>
          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rpiid || geo.properties?.name}
                    geography={geo}
                    fill="#e8eaed"
                    stroke="#dadce0"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>
            {hotelMapProperties.map((prop) => (
              <Marker
                key={prop.name}
                coordinates={prop.coordinates}
                onClick={() => setSelectedProperty(prop.name)}
              >
                <motion.circle
                  r={6}
                  fill="#FBBC05"
                  stroke="#fff"
                  strokeWidth={1.5}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="cursor-pointer"
                />
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{ fontSize: 8, fill: '#5f6368', fontFamily: 'Roboto' }}
                >
                  {prop.name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Property Comparison */}
        <div className="glass-card p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-content-primary mb-4">Property Comparison</h4>
          <div className="space-y-4">
            {hotelPropertyComparison.map((prop) => (
              <div
                key={prop.name}
                className={`p-3 rounded-lg transition-colors ${
                  selectedProperty === prop.name ? 'bg-yellow-50 border border-yellow-300' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-content-primary font-medium">{prop.name}</span>
                  <span className="text-xs text-google-yellow">&#9733; {prop.satisfaction}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="text-xs text-content-tertiary mb-1">Occupancy</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-google-yellow h-1.5 rounded-full transition-all"
                        style={{ width: `${prop.occupancy}%` }}
                      />
                    </div>
                    <span className="text-xs text-content-secondary">{prop.occupancy}%</span>
                  </div>
                  <div>
                    <div className="text-xs text-content-tertiary mb-1">ADR</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-google-green h-1.5 rounded-full transition-all"
                        style={{ width: `${(prop.adr / 220) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-content-secondary">${prop.adr}</span>
                  </div>
                  <div>
                    <div className="text-xs text-content-tertiary mb-1">RevPAR</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-google-blue h-1.5 rounded-full transition-all"
                        style={{ width: `${(prop.revpar / 170) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-content-secondary">${prop.revpar}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HotelPerformance);
