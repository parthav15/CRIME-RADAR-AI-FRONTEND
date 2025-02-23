import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import LoginRegister from './pages/LoginRegister';
import FeedbackPage from './pages/FeedbackPage';
import ContactusPage from './pages/ContactusPage';
import CommunityPage from './pages/CommunityPage';
import NewPost from './components/Community/NewPost';
import PostDetail from './components/Community/PostDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/new-post" element={<NewPost />} />
        <Route path="/community/posts/:id" element={<PostDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

