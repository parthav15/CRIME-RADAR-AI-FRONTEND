import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import indiaStateGeoJSON from "../../assets/india_state_geo.json";
import { useState } from "react";

const IndiaMap = ({ onStateClick }) => {
  const [hoveredState, setHoveredState] = useState(null);

  const stateStyle = {
    fillColor: "#155e75",
    weight: 1,
    opacity: 1,
    color: "#ffffff",
    fillOpacity: 0.7,
  };

  const highlightStyle = {
    fillColor: "#0891b2",
    weight: 2,
    opacity: 1,
    color: "#e5e7eb",
    fillOpacity: 0.9,
  };

  const onEachState = (stateFeature, layer) => {
    const stateName = stateFeature.properties.NAME_1;
    layer.bindTooltip(stateName, { 
      permanent: false,
      className: "bg-gray-800 text-cyan-400 border border-cyan-500/20 rounded-lg px-2 py-1"
    });

    layer.on({
      mouseover: () => {
        setHoveredState(stateName);
        layer.setStyle(highlightStyle);
      },
      mouseout: () => {
        setHoveredState(null);
        layer.setStyle(stateStyle);
      },
      click: () => onStateClick(stateName),
    });
  };

  return (
    <motion.div
      className="w-full h-screen flex justify-center items-center bg-gray-900"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <MapContainer
        center={[22.0, 78.0]}
        zoom={5}
        className="w-[90%] h-[80vh] rounded-xl shadow-2xl border border-cyan-500/20 backdrop-blur-sm"
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <GeoJSON 
          data={indiaStateGeoJSON} 
          style={stateStyle}
          onEachFeature={onEachState}
        />
      </MapContainer>

      {hoveredState && (
        <motion.div
          className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-cyan-50 px-4 py-2 rounded-lg shadow-lg border border-cyan-400/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <span className="font-mono text-sm">{hoveredState}</span>
          <div className="absolute inset-0 -z-10 bg-cyan-500/10 rounded-lg" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default IndiaMap;