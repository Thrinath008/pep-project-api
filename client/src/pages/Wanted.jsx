import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config'

function Wanted() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)

    const fetchWanted = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${API_BASE_URL}/api/wanted?page=${page}`)
            setItems(response.data.items)
            setError('')
        } catch (err) {
            setError('Failed to fetch data from FBI API')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWanted()
    }, [page])

    return (
        <div className="container py-4">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-danger">FBI Wanted Persons</h1>
                <p className="lead text-muted">A school project displaying data from the Official FBI API</p>
            </div>

            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <div className="row g-4">
                {items.map((person) => (
                    <div className="col-md-6 col-lg-4" key={person.uid}>
                        <div className="card h-100 shadow-sm border-0 person-card overflow-hidden">
                            <div style={{ height: '300px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                                <img
                                    src={person.images[0]?.large || person.images[0]?.original || 'https://via.placeholder.com/300x400?text=No+Image'}
                                    className="card-img-top h-100 w-100"
                                    style={{ objectFit: 'cover' }}
                                    alt={person.title}
                                />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title fw-bold text-uppercase">{person.title}</h5>
                                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                                    {person.description || 'No description available'}
                                </p>
                                {person.subjects && person.subjects.length > 0 && (
                                    <span className="badge bg-secondary mb-2">{person.subjects[0]}</span>
                                )}
                            </div>
                            <div className="card-footer bg-white border-0 pb-3 text-center">
                                <a
                                    href={person.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-danger btn-sm w-100"
                                >
                                    View Official Poster
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!loading && !error && (
                <div className="d-flex justify-content-center mt-5 gap-3">
                    <button
                        className="btn btn-secondary"
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Previous
                    </button>
                    <span className="align-self-center fw-bold">Page {page}</span>
                    <button
                        className="btn btn-dark"
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default Wanted
