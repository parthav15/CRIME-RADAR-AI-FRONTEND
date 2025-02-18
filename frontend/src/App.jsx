import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import LoginRegister from './pages/LoginRegister';
import FeedbackPage from './pages/FeedbackPage';
import ContactusPage from './pages/ContactusPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
      </Routes>
    </Router>
  );
}

export default App;

