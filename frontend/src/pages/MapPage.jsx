import React, { useState } from 'react';
import Navbar from '../components/HomePage/Navbar';
import MapWrapper from '../components/Map/MapWrapper';
import Footer from '../components/HomePage/Footer';
import StateDataPanel from '../components/Map/StateDataPanel';

const MapPage = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCrimeType, setSelectedCrimeType] = useState('all_crimes');
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(false);

  const popularCrimeTypes = [
    'all_crimes',
    'murder',
    'attempt_to_murder',
    'rape',
    'kidnapping_abduction',
    'dacoity',
    'robbery',
    'burglary',
    'theft',
    'auto_theft',
    'dowry_deaths',
    'assault_women_modesty',
    'cruelty_by_husband',
    'total_ipc_crimes'
  ];

  const formatCrimeType = (crimeType) => {
    if (crimeType === 'all_crimes') return 'All Crimes';
    return crimeType
      .replace(/_/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  const handleCrimeTypeSelect = (crimeType) => {
    setSelectedCrimeType(crimeType);
    setSelectedState(null);
  };

  const handleStateClick = async (state) => {
    setLoading(true);
    try {
      const url = selectedCrimeType === 'all_crimes'
        ? `http://127.0.0.1:8000/crimes/data/?state=${state}`
        : `http://127.0.0.1:8000/crimes/data/?state=${state}&crime_type=${selectedCrimeType}`;

      const response = await fetch(url);

      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setSelectedState(state);
      setStateData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />

      {/* Crime Type Selection Bar */}
      <div className="mt-16 bg-gray-800 py-4 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <h3 className="text-lg font-semibold text-cyan-400">
              Analyze Crime Categories:
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularCrimeTypes.map((crimeType) => (
                <button
                  key={crimeType}
                  onClick={() => handleCrimeTypeSelect(crimeType)}
                  className={`px-4 py-2 rounded-lg transition-all border ${selectedCrimeType === crimeType
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-cyan-glow'
                    : 'bg-gray-700/30 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300'
                    }`}
                >
                  {formatCrimeType(crimeType)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        {!selectedState && (
          <MapWrapper onStateClick={handleStateClick} />
        )}

        {selectedState && (
          <StateDataPanel
            state={selectedState}
            data={stateData}
            selectedCrimeType={selectedCrimeType}
            onClose={() => setSelectedState(null)}
          />
        )}

        {loading && (
          <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center backdrop-blur-sm">
            <div className="text-cyan-400 text-xl font-semibold flex items-center gap-3">
              <div className="border-2 border-cyan-400 rounded-full w-5 h-5 animate-spin" />
              Loading {formatCrimeType(selectedCrimeType)} data for {selectedState}...
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;