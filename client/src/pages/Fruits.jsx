import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_BASE_URL from '../config'

function Fruits() {
    const [fruits, setFruits] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchFruits = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/fruit/all`)
                setFruits(response.data)
                setError('')
            } catch (err) {
                setError('Failed to fetch fruit data')
            } finally {
                setLoading(false)
            }
        }
        fetchFruits()
    }, [])

    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container py-4">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-success">Fruityvice API</h1>
                <p className="lead text-muted">A school project displaying nutritional data for various fruits</p>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control rounded-pill px-4 py-2 shadow-sm"
                        placeholder="Search fruits (e.g. Apple, Banana)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <div className="row g-4">
                {filteredFruits.map((fruit) => (
                    <div className="col-md-6 col-lg-4" key={fruit.id}>
                        <div className="card h-100 shadow-sm border-0 fruit-card p-3" style={{ borderRadius: '20px', background: '#ffffff', border: '1px solid var(--accent-color)' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="card-title fw-bold text-success m-0">{fruit.name}</h3>
                                    <span className="badge bg-light text-dark border">{fruit.family}</span>
                                </div>

                                <p className="text-muted small mb-3">Genus: {fruit.genus} | Order: {fruit.order}</p>

                                <h6 className="fw-bold border-bottom pb-2 mb-3">Nutrition (per 100g)</h6>
                                <div className="row text-center bg-white rounded p-3 shadow-sm g-2">
                                    <div className="col-4">
                                        <div className="h5 fw-bold text-primary m-0">{fruit.nutritions.calories}</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Calories</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="h5 fw-bold text-danger m-0">{fruit.nutritions.sugar}g</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Sugar</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="h5 fw-bold text-warning m-0">{fruit.nutritions.fat}g</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Fat</small>
                                    </div>
                                    <div className="col-6 mt-3 border-top pt-2">
                                        <div className="h6 fw-bold text-info m-0">{fruit.nutritions.carbohydrates}g</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Carbs</small>
                                    </div>
                                    <div className="col-6 mt-3 border-top pt-2">
                                        <div className="h6 fw-bold text-secondary m-0">{fruit.nutritions.protein}g</div>
                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Protein</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredFruits.length === 0 && !loading && (
                <div className="text-center py-5 text-muted">
                    <p>No fruits found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    )
}

export default Fruits
