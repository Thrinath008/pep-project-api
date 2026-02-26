import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const apis = [
        { name: 'Weather API', description: 'Real-time weather data and forecasts.', path: '/weather', class: 'bg-weather', icon: '☁️' },
        { name: 'Gita Verse API', description: 'Sacred verses from Bhagavad Gita in Telugu.', path: '/gita', class: 'bg-gita', icon: '🕉️' },
        { name: 'Random Jokes API', description: 'Laugh out loud with random jokes.', path: '/jokes', class: 'bg-joke', icon: '😂' },
        { name: 'FBI Wanted API', description: 'Live database of wanted individuals.', path: '/wanted', class: 'bg-fbi', icon: '🕵️' },
        { name: 'Fruit Nutrition API', description: 'Nutritional facts for 50+ fruits.', path: '/fruits', class: 'bg-fruit', icon: '🍎' },
    ]

    return (
        <div className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="display-4 fw-bold mb-3">Project Hub</h1>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                    Welcome to our school project. This application serves as a central hub for various API integrations,
                    demonstrating how to handle diverse data sources in a modern React application.
                </p>
            </div>

            <div className="row g-4 mt-4">
                {apis.map((api, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <Link to={api.path} className="text-decoration-none">
                            <div className={`card api-card h-100 p-4 border-0 shadow-sm ${api.class}`}>
                                <div className="display-5 mb-3">{api.icon}</div>
                                <h3 className="h4 mb-2">{api.name}</h3>
                                <p className="text-secondary small mb-0">{api.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="main-card mt-5 bg-white">
                <h2 className="text-center mb-4">Why this Project?</h2>
                <div className="row">
                    <div className="col-md-4 text-center p-3">
                        <h4 className="h5 fw-bold">Multi-API Support</h4>
                        <p className="text-muted small">We integrate 5 distinct APIs ranging from government databases to spiritual texts.</p>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <h4 className="h5 fw-bold">Secure Proxying</h4>
                        <p className="text-muted small">Our Node.js backend handles all API calls to bypass CORS and manage headers safely.</p>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <h4 className="h5 fw-bold">Modern Tech Stack</h4>
                        <p className="text-muted small">Built with React, Bootstrap 5, Express, and Axios for a robust experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
