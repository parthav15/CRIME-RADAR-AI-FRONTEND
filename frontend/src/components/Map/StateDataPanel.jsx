import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StateDataPanel = ({ state, data, onClose, selectedCrimeType }) => {
  const records = data?.data ? data.data : data;

  const formatCrimeType = (str) =>
    str === "all_crimes"
      ? "All Crimes"
      : str
          .replace(/_/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

  const processAllCrimesData = () => {
    return Object.keys(records[0])
      .filter((key) => !["id", "state", "year", "total_ipc_crimes"].includes(key))
      .map((crimeType) => ({
        crimeType,
        total: records.reduce((sum, entry) => sum + entry[crimeType], 0),
      }))
      .sort((a, b) => b.total - a.total);
  };

  const AllCrimesVisualization = () => {
    const crimeData = processAllCrimesData();

    const yearTrends = records.map((entry) => ({
      year: entry.year,
      total: entry.total_ipc_crimes,
      ...Object.fromEntries(
        Object.entries(entry).filter(
          ([key]) => !["id", "state", "total_ipc_crimes"].includes(key)
        )
      ),
    }));

    return (
      <div className="space-y-6">
        {/* Crime Distribution Chart */}
        <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Crime Distribution
          </h3>
          <div className="h-64 overflow-x-auto">
            {/* Set a dynamic width based on the number of crime types */}
            <div style={{ width: `${crimeData.length * 80}px`, height: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={crimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                  <XAxis
                    dataKey="crimeType"
                    angle={-45}
                    textAnchor="end"
                    tick={{ fill: "#93c5fd", fontSize: 12 }}
                    tickFormatter={formatCrimeType}
                  />
                  <YAxis tick={{ fill: "#93c5fd" }} />
                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "1px solid #0891b2",
                      borderRadius: "8px",
                    }}
                    formatter={(value) => [value, "Cases"]}
                  />
                  <Bar dataKey="total" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Yearly Crime Composition Chart */}
        <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Yearly Crime Composition
          </h3>
          <div className="h-96 overflow-x-auto">
            {/* If needed, set a fixed width to allow horizontal scrolling */}
            <div style={{ width: "1200px", height: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                  <XAxis dataKey="year" stroke="#67e8f9" />
                  <YAxis stroke="#67e8f9" />
                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "1px solid #0891b2",
                      borderRadius: "8px",
                    }}
                  />
                  {crimeData.map((crime, idx) => (
                    <Bar
                      key={idx}
                      dataKey={crime.crimeType}
                      stackId="a"
                      fill={`hsl(${(idx * 70) % 360}, 70%, 45%)`}
                    />
                  ))}
                  <Bar dataKey="total" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Crime Statistics */}
        <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Detailed Crime Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {crimeData.map((crime, index) => (
              <div
                key={index}
                className="bg-gray-600/10 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">
                    {formatCrimeType(crime.crimeType)}
                  </span>
                  <span className="font-mono text-cyan-400 text-sm">
                    {crime.total.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Visualization for a specific crime type (when not "all_crimes")
  const SingleCrimeVisualization = () => {
    const chartData = records.map((entry) => ({
      year: entry.year,
      value: entry[selectedCrimeType],
    }));
    const avgValue = (
      chartData.reduce((sum, entry) => sum + entry.value, 0) /
      chartData.length
    ).toFixed(2);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(80vh-80px)]">
        {/* Historical Trends Chart */}
        <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Historical Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
              <XAxis
                dataKey="year"
                stroke="#67e8f9"
                tick={{ fill: "#93c5fd" }}
              />
              <YAxis stroke="#67e8f9" tick={{ fill: "#93c5fd" }} />
              <Tooltip
                contentStyle={{
                  background: "#1e293b",
                  border: "1px solid #0891b2",
                  borderRadius: "8px",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => (
                  <span className="text-cyan-400">{value}</span>
                )}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ fill: "#0891b2", strokeWidth: 2 }}
                name={`${formatCrimeType(selectedCrimeType)} Cases`}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Key Metrics & Annual Breakdown */}
        <div className="space-y-6">
          <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">
              Key Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-600/10 p-3 rounded-lg">
                <span className="text-gray-300">Average Cases</span>
                <span className="font-mono text-cyan-400">{avgValue}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-600/10 p-3 rounded-lg">
                <span className="text-gray-300">Total Cases</span>
                <span className="font-mono text-cyan-400">
                  {chartData
                    .reduce((sum, entry) => sum + entry.value, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700/20 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">
              Annual Breakdown
            </h3>
            <div className="space-y-2">
              {[...chartData].reverse().map((entry, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-600/10 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors"
                >
                  <span className="text-gray-300">{entry.year}</span>
                  <span className="font-mono text-cyan-400">
                    {entry.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="w-full h-screen flex justify-center items-center bg-gray-900/90 backdrop-blur-sm"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* The main inner container is now scrollable vertically */}
      <div className="w-[90%] h-[80vh] overflow-y-auto bg-gray-800 rounded-xl shadow-2xl border border-cyan-500/20 p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {state} - {formatCrimeType(selectedCrimeType)}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Map
          </button>
        </div>

        {selectedCrimeType === "all_crimes" ? (
          <AllCrimesVisualization />
        ) : (
          <SingleCrimeVisualization />
        )}
      </div>
    </motion.div>
  );
};

export default StateDataPanel;
