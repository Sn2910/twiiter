import logo from './logo.svg'
import './App.css'
import Newsfeed from './Components/Newsfeed/Newsfeed'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
    return (
        <div className="App">
            <main>
                <Sidebar />
                <Newsfeed />
            </main>
        </div>
    )
}

export default App
