import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`)
            setWeather(response.data)
            setError('')
        } catch (err) {
            setWeather(null)
            setError('City not found or server error')
        }
    }

    return (
        <div className="card shadow-sm p-4">
            <h1 className="text-info mb-4">Weather API</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-info text-white" onClick={fetchWeather}>Get Weather</button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {weather && (
                <div className="mt-4 p-3 border rounded bg-light">
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p className="mb-1"><strong>Temperature:</strong> {weather.main.temp}°C</p>
                    <p className="mb-1"><strong>Humidity:</strong> {weather.main.humidity}%</p>
                    <p className="mb-1"><strong>Conditions:</strong> {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}

export default Weather
