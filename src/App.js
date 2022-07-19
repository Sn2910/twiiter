import "./App.css";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Sidebar from "./Components/Sidebar/Sidebar";
import Advertise from "./Components/Advertise/Advertise";
import { Routes, Route, Navigate } from "react-router-dom";
import MessagePage from "./Components/MessagePage/MessagePage";
import Profile from "./Components/Profile/Profile";
import ProfilePosters from "./Components/ProfilePosters/ProfilePosters";

function App() {
  return (
    <div className="app">
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Newsfeed />} />
          <Route path="/messagePage/:id" element={<MessagePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfilePosters />} />
          <Route path="/twitter" element={<Navigate to="/" replace />} />
        </Routes>
        <Advertise />
      </main>
    </div>
  );
}

export default App;
