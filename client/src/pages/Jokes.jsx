import React, { useState } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config'

function Jokes() {
    const [joke, setJoke] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchJoke = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${API_BASE_URL}/api/jokes`)
            setJoke(response.data)
            setError('')
        } catch (err) {
            setError('Failed to fetch joke')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="card shadow-sm p-4 text-center">
            <h1 className="text-danger mb-4">Random Jokes API</h1>
            <button
                className="btn btn-danger btn-lg mb-4"
                onClick={fetchJoke}
                disabled={loading}
            >
                {loading ? 'Thinking...' : 'Tell me a Joke!'}
            </button>

            {error && <div className="alert alert-danger">{error}</div>}

            {joke && (
                <div className="mt-3 p-4 border rounded bg-light">
                    {joke.type === 'single' ? (
                        <p className="fs-4">{joke.joke}</p>
                    ) : (
                        <div>
                            <p className="fs-4 fw-bold">{joke.setup}</p>
                            <hr />
                            <p className="fs-4 text-primary">{joke.delivery}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Jokes
