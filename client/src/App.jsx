import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Weather from './pages/Weather'
import Gita from './pages/Gita'
import Jokes from './pages/Jokes'

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">API Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                    API
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/weather">Weather API</Link></li>
                                    <li><Link className="dropdown-item" to="/gita">Gita Verse API</Link></li>
                                    <li><Link className="dropdown-item" to="/jokes">Random Jokes</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/gita" element={<Gita />} />
                    <Route path="/jokes" element={<Jokes />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
