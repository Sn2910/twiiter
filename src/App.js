import logo from './logo.svg'
import './App.css'
import Newsfeed from './Components/Newsfeed/Newsfeed'
import Sidebar from './Components/Sidebar/Sidebar'
import Advertise from './Components/Advertise/Advertise'
import Post from './Components/Post/Post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MessagePage from './Components/MessagePage/MessagePage'
import Profile from './Components/Profile/Profile'

function App() {
    return (
        <div className="app">
            <main>
                <Sidebar />
                    <Routes>
                        <Route
                            path="/messagePage/:id"
                            element={<MessagePage />}
                        />
                        <Route path="/" element={<Newsfeed />} />
                       <Route path ="/profile" element={<Profile />} /> 
                        
                    </Routes>

                <Advertise />
            </main>
            
        </div>
    )
}

export default App
