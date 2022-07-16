import logo from './logo.svg'
import './App.css'
import Newsfeed from './Components/Newsfeed/Newsfeed'
import Sidebar from './Components/Sidebar/Sidebar'
import Advertise from './Components/Advertise/Advertise'
import Post from './Components/Post/Post'

function App() {
    return (
        <div className="app">
            <main>
                <Sidebar />
                <Newsfeed />
                
                <Advertise />
                
            </main>
        </div>
    )
}

export default App
