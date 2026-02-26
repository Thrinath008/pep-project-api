import React from 'react'

function About() {
    return (
        <div className="py-5">
            <div className="main-card shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold">About Our Project</h1>
                </div>


                <p className="lead text-secondary text-center mb-5">
                    This platform was developed as a school submission to showcase the power of modern web technologies.
                </p>

                <div className="row g-4">
                    <div className="col-md-6">
                        <h5 className="fw-bold text-primary">Our Vision</h5>
                        <p className="text-muted">
                            To create a unified interface that simplifies access to diverse global datasets through a single, clean dashboard.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5 className="fw-bold text-primary">Technical Approach</h5>
                        <p className="text-muted">
                            We used React for a dynamic UI and Node.js to bridge the gap between frontend and external API servers.
                        </p>
                    </div>
                </div>

                <div className="mt-5 p-4 rounded-3 text-center" style={{ backgroundColor: '#fdf2f2' }}>
                    <h5 className="fw-bold mb-2">Developed for Viva 2026</h5>
                    <p className="text-muted mb-0 small">Project Code: PEP-API-HUB-001</p>
                </div>
            </div>
        </div>
    )
}

export default About
