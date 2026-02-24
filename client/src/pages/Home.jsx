import React from 'react'

function Home() {
    return (
        <div className="card shadow-sm p-4">
            <h1 className="text-primary mb-4">Welcome to our Multi-API Project</h1>
            <p className="lead">
                This project demonstrates the use of React with a Node Express backend to integrate various external APIs.
            </p>
            <h3>APIs Used in this Project:</h3>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                    <strong>OpenWeather API:</strong> Used to fetch real-time weather information for any city in the world.
                </li>
                <li className="list-group-item">
                    <strong>Gita API:</strong> Fetches sacred verses from the Bhagavad Gita in Telugu based on chapter and verse input.
                </li>
                <li className="list-group-item">
                    <strong>Random Jokes API:</strong> Provides random jokes to keep the user entertained.
                </li>
            </ul>
            <p>
                The backend serves as a proxy to handle these requests securely and bypass CORS issues, ensuring a smooth user experience.
            </p>
        </div>
    )
}

export default Home
