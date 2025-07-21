import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Treemap,
} from 'recharts';
import {
  Users,
  Eye,
  Clock,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  TrendingUp,
  MousePointer,
  Target,
  Activity,
  Map,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

// US States TopoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Memoized Chart Components to prevent re-renders
const MemoizedStatCard = memo(({ icon: Icon, title, value, subtitle, color, trend }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center">
        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
        <span className="text-sm text-green-500 font-medium">{trend}</span>
      </div>
    )}
  </motion.div>
));

const MemoizedChartContainer = memo(({ title, children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700 ${className}`}
  >
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    <div className="h-80">
      {children}
    </div>
  </motion.div>
));

const MemoizedTimeSeriesChart = memo(({ data, colors }) => (
  <ResponsiveContainer width="100%" height="100%">
    <ComposedChart data={data}>
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis 
        dataKey="date" 
        tick={{ fontSize: 12 }}
        tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      />
      <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
      <RechartsTooltip 
        contentStyle={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      />
      <Legend />
      <Area
        yAxisId="left"
        type="monotone"
        dataKey="visitors"
        fill={colors.primary}
        fillOpacity={0.3}
        stroke={colors.primary}
        strokeWidth={2}
        name="Visitors"
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="pageViews"
        stroke={colors.secondary}
        strokeWidth={3}
        dot={{ fill: colors.secondary, strokeWidth: 2, r: 4 }}
        name="Page Views"
      />
    </ComposedChart>
  </ResponsiveContainer>
));

const MemoizedDeviceChart = memo(({ data, colors }) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="visitors"
        label={({ device, percentage }) => `${device}: ${percentage}%`}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <RechartsTooltip 
        contentStyle={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        formatter={(value, name) => [value.toLocaleString(), 'Visitors']}
      />
    </PieChart>
  </ResponsiveContainer>
));

const MemoizedSourceChart = memo(({ data, color }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} layout="horizontal">
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis type="number" tick={{ fontSize: 12 }} />
      <YAxis dataKey="source" type="category" tick={{ fontSize: 12 }} width={80} />
      <RechartsTooltip 
        contentStyle={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        formatter={(value) => [value.toLocaleString(), 'Visitors']}
      />
      <Bar dataKey="visitors" fill={color} radius={[0, 4, 4, 0]} />
    </BarChart>
  </ResponsiveContainer>
));

const MemoizedPageChart = memo(({ data, color }) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis dataKey="page" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <RechartsTooltip 
        contentStyle={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        formatter={(value) => [value.toLocaleString(), 'Visitors']}
      />
      <Area
        type="monotone"
        dataKey="visitors"
        stroke={color}
        fill={color}
        fillOpacity={0.6}
        strokeWidth={2}
      />
    </AreaChart>
  </ResponsiveContainer>
));

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('7days');
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [mapPosition, setMapPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  // Load and parse CSV data
  useEffect(() => {
    const loadAnalyticsData = async () => {
      try {
        const response = await fetch('/analytics-data.csv');
        const csvText = await response.text();
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          const row = {};
          headers.forEach((header, index) => {
            const value = values[index];
            // Convert numeric fields
            if (['visitors', 'pageViews', 'sessionDuration', 'bounceRate', 'revenue', 'conversions', 'newUsers', 'returningUsers', 'timeOnPage'].includes(header)) {
              row[header] = parseFloat(value) || 0;
            } else {
              row[header] = value;
            }
          });
          return row;
        }).filter(row => row.date); // Filter out empty rows

        setAnalyticsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading analytics data:', error);
        setIsLoading(false);
      }
    };

    loadAnalyticsData();
  }, []);

  // Memoize calculated metrics to prevent unnecessary recalculations
  const metrics = useMemo(() => {
    if (!analyticsData.length) return {};

    const totalVisitors = analyticsData.reduce((sum, row) => sum + row.visitors, 0);
    const totalPageViews = analyticsData.reduce((sum, row) => sum + row.pageViews, 0);
    const avgSessionDuration = analyticsData.reduce((sum, row) => sum + row.sessionDuration, 0) / analyticsData.length;
    const avgBounceRate = analyticsData.reduce((sum, row) => sum + row.bounceRate, 0) / analyticsData.length;
    const totalConversions = analyticsData.reduce((sum, row) => sum + row.conversions, 0);

    return {
      totalVisitors,
      totalPageViews,
      avgSessionDuration: Math.round(avgSessionDuration),
      avgBounceRate: (avgBounceRate * 100).toFixed(1),
      totalConversions,
      conversionRate: ((totalConversions / totalVisitors) * 100).toFixed(2),
    };
  }, [analyticsData]);

  // Memoize chart data to prevent re-renders
  const timeSeriesData = useMemo(() => {
    const dailyData = analyticsData.reduce((acc, row) => {
      const date = row.date;
      if (!acc[date]) {
        acc[date] = {
          date,
          visitors: 0,
          pageViews: 0,
          sessionDuration: 0,
          bounceRate: 0,
          conversions: 0,
          count: 0,
        };
      }
      acc[date].visitors += row.visitors;
      acc[date].pageViews += row.pageViews;
      acc[date].sessionDuration += row.sessionDuration;
      acc[date].bounceRate += row.bounceRate;
      acc[date].conversions += row.conversions;
      acc[date].count += 1;
      return acc;
    }, {});

    return Object.values(dailyData).map(day => ({
      ...day,
      sessionDuration: Math.round(day.sessionDuration / day.count),
      bounceRate: (day.bounceRate / day.count * 100).toFixed(1),
    }));
  }, [analyticsData]);

  const deviceData = useMemo(() => {
    const deviceCounts = analyticsData.reduce((acc, row) => {
      acc[row.device] = (acc[row.device] || 0) + row.visitors;
      return acc;
    }, {});

    return Object.entries(deviceCounts).map(([device, visitors]) => ({
      device,
      visitors,
      percentage: ((visitors / metrics.totalVisitors) * 100).toFixed(1),
    }));
  }, [analyticsData, metrics.totalVisitors]);

  const stateData = useMemo(() => {
    const stateCounts = analyticsData.reduce((acc, row) => {
      acc[row.state] = (acc[row.state] || 0) + row.visitors;
      return acc;
    }, {});

    return Object.entries(stateCounts)
      .map(([state, visitors]) => ({ state, visitors }))
      .sort((a, b) => b.visitors - a.visitors);
  }, [analyticsData]);

  const sourceData = useMemo(() => {
    const sourceCounts = analyticsData.reduce((acc, row) => {
      acc[row.source] = (acc[row.source] || 0) + row.visitors;
      return acc;
    }, {});

    return Object.entries(sourceCounts).map(([source, visitors]) => ({
      source,
      visitors,
    }));
  }, [analyticsData]);

  const pageData = useMemo(() => {
    const pageCounts = analyticsData.reduce((acc, row) => {
      acc[row.page] = (acc[row.page] || 0) + row.visitors;
      return acc;
    }, {});

    return Object.entries(pageCounts).map(([page, visitors]) => ({
      page: page === '/' ? 'Home' : page.replace('/', '').charAt(0).toUpperCase() + page.slice(2),
      visitors,
    }));
  }, [analyticsData]);

  // State name to ID mapping for US map
  const stateNameToId = {
    'Alabama': '01', 'Alaska': '02', 'Arizona': '04', 'Arkansas': '05', 'California': '06',
    'Colorado': '08', 'Connecticut': '09', 'Delaware': '10', 'Florida': '12', 'Georgia': '13',
    'Hawaii': '15', 'Idaho': '16', 'Illinois': '17', 'Indiana': '18', 'Iowa': '19',
    'Kansas': '20', 'Kentucky': '21', 'Louisiana': '22', 'Maine': '23', 'Maryland': '24',
    'Massachusetts': '25', 'Michigan': '26', 'Minnesota': '27', 'Mississippi': '28', 'Missouri': '29',
    'Montana': '30', 'Nebraska': '31', 'Nevada': '32', 'New Hampshire': '33', 'New Jersey': '34',
    'New Mexico': '35', 'New York': '36', 'North Carolina': '37', 'North Dakota': '38', 'Ohio': '39',
    'Oklahoma': '40', 'Oregon': '41', 'Pennsylvania': '42', 'Rhode Island': '44', 'South Carolina': '45',
    'South Dakota': '46', 'Tennessee': '47', 'Texas': '48', 'Utah': '49', 'Vermont': '50',
    'Virginia': '51', 'Washington': '53', 'West Virginia': '54', 'Wisconsin': '55', 'Wyoming': '56'
  };

  // Memoize state visitor data to prevent recalculation on hover
  const stateVisitorData = useMemo(() => {
    const stateVisitorMap = {};
    
    stateData.forEach(({ state, visitors }) => {
      const stateId = stateNameToId[state];
      if (stateId) {
        stateVisitorMap[stateId] = { visitors, name: state };
      }
    });

    return stateVisitorMap;
  }, [stateData, stateNameToId]);

  // Get color for state based on visitor count
  const getStateColor = useMemo(() => {
    const maxVisitors = Math.max(...Object.values(stateVisitorData).map(d => d.visitors));
    const minVisitors = Math.min(...Object.values(stateVisitorData).map(d => d.visitors));

    return (geo) => {
      const stateId = geo.id;
      const stateDataItem = stateVisitorData[stateId];
      
      if (!stateDataItem) return '#E5E7EB'; // Default gray for no data
      
      const normalizedValue = (stateDataItem.visitors - minVisitors) / (maxVisitors - minVisitors);
      
      // Create a beautiful blue gradient
      const intensity = Math.max(0.2, normalizedValue); // Minimum 20% intensity
      const red = Math.round(59 + (1 - intensity) * 100);
      const green = Math.round(130 + (1 - intensity) * 60);
      const blue = Math.round(246 - (1 - intensity) * 50);
      
      return `rgb(${red}, ${green}, ${blue})`;
    };
  }, [stateVisitorData]);

  // Handle state mouse events
  const handleStateMouseEnter = (geo) => {
    const stateDataItem = stateVisitorData[geo.id];
    
    if (stateDataItem) {
      setTooltipContent(`${stateDataItem.name}: ${stateDataItem.visitors.toLocaleString()} Visitors`);
      setSelectedState(stateDataItem);
    } else {
      setTooltipContent(`${geo.properties.name}: No data`);
      setSelectedState(null);
    }
  };

  const handleStateMouseLeave = () => {
    setTooltipContent('');
    setSelectedState(null);
  };

  // Map zoom controls
  const handleZoomIn = () => {
    if (mapPosition.zoom >= 4) return;
    setMapPosition(prev => ({ ...prev, zoom: prev.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (mapPosition.zoom <= 1) return;
    setMapPosition(prev => ({ ...prev, zoom: prev.zoom / 1.5 }));
  };

  const handleResetZoom = () => {
    setMapPosition({ coordinates: [0, 0], zoom: 1 });
  };

  // Color schemes
  const colors = {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
    danger: '#EF4444',
    purple: '#8B5CF6',
    teal: '#14B8A6',
    pink: '#EC4899',
    orange: '#F97316',
  };

  const deviceColors = ['#3B82F6', '#10B981', '#F59E0B'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-12 w-12 text-accent animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-20 sm:pt-24 lg:pt-28 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time insights into website performance, user engagement, and traffic patterns
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8"
        >
          <MemoizedStatCard
            icon={Users}
            title="Total Visitors"
            value={metrics.totalVisitors?.toLocaleString()}
            color="bg-blue-500"
            trend="+12.5%"
          />
          <MemoizedStatCard
            icon={Eye}
            title="Page Views"
            value={metrics.totalPageViews?.toLocaleString()}
            color="bg-green-500"
            trend="+8.3%"
          />
          <MemoizedStatCard
            icon={Clock}
            title="Avg Session"
            value={`${Math.floor(metrics.avgSessionDuration / 60)}m ${metrics.avgSessionDuration % 60}s`}
            color="bg-yellow-500"
            trend="+5.2%"
          />
          <MemoizedStatCard
            icon={MousePointer}
            title="Bounce Rate"
            value={`${metrics.avgBounceRate}%`}
            color="bg-red-500"
            trend="-3.1%"
          />
          <MemoizedStatCard
            icon={Target}
            title="Conversions"
            value={metrics.totalConversions}
            color="bg-purple-500"
            trend="+15.7%"
          />
          <MemoizedStatCard
            icon={TrendingUp}
            title="Conversion Rate"
            value={`${metrics.conversionRate}%`}
            color="bg-teal-500"
            trend="+2.4%"
          />
        </motion.div>

        {/* Interactive US Map */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Visitors by State
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg min-w-[200px] h-[36px] flex items-center">
                {selectedState ? (
                  <>
                    <span className="font-medium">{selectedState.name}:</span>{" "}{selectedState.visitors.toLocaleString()} Visitors
                  </>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">Hover over a state</span>
                )}
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                disabled={mapPosition.zoom >= 4}
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                disabled={mapPosition.zoom <= 1}
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <ComposableMap
                  projection="geoAlbersUsa"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                >
                  <ZoomableGroup
                    zoom={mapPosition.zoom}
                    center={mapPosition.coordinates}
                    onMoveEnd={({ coordinates, zoom }) => {
                      setMapPosition({ coordinates, zoom });
                    }}
                  >
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={getStateColor(geo)}
                            stroke="#ffffff"
                            strokeWidth={0.5}
                            style={{
                              default: {
                                outline: 'none',
                                transition: 'all 0.3s ease',
                              },
                              hover: {
                                fill: '#F59E0B',
                                outline: 'none',
                                cursor: 'pointer',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                                transform: 'scale(1.01)',
                              },
                              pressed: {
                                fill: '#EF4444',
                                outline: 'none',
                              },
                            }}
                            onMouseEnter={() => handleStateMouseEnter(geo)}
                            onMouseLeave={handleStateMouseLeave}
                            data-tooltip-id="state-tooltip"
                            data-tooltip-content={tooltipContent}
                          />
                        ))
                      }
                    </Geographies>
                  </ZoomableGroup>
                </ComposableMap>
                
                {/* Beautiful Custom Tooltip */}
                <Tooltip
                  id="state-tooltip"
                  place="top"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
              </div>
            </div>
            
            <div className="lg:w-80">
              <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Top States</h4>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {stateData.slice(0, 20).map((state, index) => (
                  <motion.div 
                    key={state.state}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-8">
                        {index + 1}.
                      </span>
                      <span className="text-sm text-gray-900 dark:text-white ml-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {state.state}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {state.visitors.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                <span>Low Traffic</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-300 rounded mr-2"></div>
                <span>Medium Traffic</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                <span>High Traffic</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Visitors Trend */}
          <MemoizedChartContainer title="Daily Visitors & Page Views Trend" className="lg:col-span-2">
            <MemoizedTimeSeriesChart data={timeSeriesData} colors={colors} />
          </MemoizedChartContainer>

          {/* Device Breakdown */}
          <MemoizedChartContainer title="Device Distribution">
            <MemoizedDeviceChart data={deviceData} colors={deviceColors} />
          </MemoizedChartContainer>

          {/* Traffic Sources */}
          <MemoizedChartContainer title="Traffic Sources">
            <MemoizedSourceChart data={sourceData} color={colors.accent} />
          </MemoizedChartContainer>
        </motion.div>

        {/* Bottom Charts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-1 gap-8"
        >
          {/* Page Performance */}
          <MemoizedChartContainer title="Page Popularity">
            <MemoizedPageChart data={pageData} color={colors.teal} />
          </MemoizedChartContainer>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Data-Driven Insights
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This dashboard showcases advanced data visualization capabilities using React and Recharts.
            The analytics demonstrate proficiency in creating interactive, responsive dashboards for business intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics; 