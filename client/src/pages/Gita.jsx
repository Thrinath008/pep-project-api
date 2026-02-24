import React, { useState } from 'react'
import axios from 'axios'

function Gita() {
    const [chapter, setChapter] = useState('1')
    const [verse, setVerse] = useState('1')
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    const fetchVerse = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/gita/${chapter}/${verse}`)
            setData(response.data)
            setError('')
        } catch (err) {
            setData(null)
            setError('Verse not found or server error')
        }
    }

    return (
        <div className="card shadow-sm p-4">
            <h1 className="text-secondary mb-4">Telugu Gita Verse API</h1>
            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <label className="form-label">Chapter</label>
                    <input
                        type="number"
                        className="form-control"
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Verse</label>
                    <input
                        type="number"
                        className="form-control"
                        value={verse}
                        onChange={(e) => setVerse(e.target.value)}
                    />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                    <button className="btn btn-secondary w-100" onClick={fetchVerse}>Get Verse</button>
                </div>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {data && (
                <div className="mt-4 p-4 border rounded bg-light">
                    <h4 className="border-bottom pb-2">Chapter {data.chapter} - Verse {data.verse}</h4>
                    <p className="fs-5 mt-3" style={{ fontStyle: 'italic' }}>{data.transliteration}</p>
                    <div className="mt-3 p-3 bg-white border rounded">
                        <h5 className="text-muted mb-2">Telugu Meaning:</h5>
                        <p className="mb-0">{data.telugu_meaning}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gita
