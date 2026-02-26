import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather() {
    const [city, setCity] = useState('Hyderabad')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchWeather = async () => {
        if (!city) return;
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`)
            setWeather(response.data)
            setError('')
        } catch (err) {
            setWeather(null)
            setError('City not found. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    // Load a default city on mount
    useEffect(() => {
        fetchWeather()
    }, [])

    const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <div className="container py-4">
            <div className="search-container text-center mb-5 mt-3">
                <h2 className="mb-4 fw-bold">Weather Search</h2>
                <div className="input-group shadow-sm rounded-pill overflow-hidden">
                    <input
                        type="text"
                        className="form-control border-0 px-4 py-3"
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
                    />
                    <button
                        className="btn btn-primary px-4 glass-btn"
                        onClick={fetchWeather}
                        disabled={loading}
                    >
                        {loading ? '...' : 'Search'}
                    </button>
                </div>
                {error && <div className="mt-3 text-danger small fw-bold">{error}</div>}
            </div>

            {weather && (
                <div className="weather-container">
                    <div className="premium-weather-card">
                        <div className="bg-slope"></div>


                        <div className="weather-header">
                            <h1 className="main-temp">
                                {Math.round(weather.main.temp)}<span className="temp-unit">°</span>
                            </h1>
                            <div className="high-low">
                                H:{Math.round(weather.main.temp_max)}°  L:{Math.round(weather.main.temp_min)}°
                            </div>
                            <div className="location-name">
                                {weather.name}, {weather.sys.country}
                            </div>
                        </div>

                        <div className="weather-footer">
                            <div className="condition-text">
                                {weather.weather[0].description}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Weather
