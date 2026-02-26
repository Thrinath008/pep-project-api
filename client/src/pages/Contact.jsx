import React from 'react'

function Contact() {
    return (
        <div className="py-5">
            <div className="main-card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
                <h1 className="text-center mb-4 display-6 fw-bold">Contact Us</h1>
                <p className="text-center text-muted mb-5">Got questions about the project? Send us a message below.</p>

                <form>
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Short Name</label>
                        <input type="text" className="form-control form-control-lg border-0 shadow-sm" style={{ backgroundColor: '#f8fafc' }} placeholder="Your name" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input type="email" className="form-control form-control-lg border-0 shadow-sm" style={{ backgroundColor: '#f8fafc' }} placeholder="name@example.com" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Detailed Message</label>
                        <textarea className="form-control border-0 shadow-sm" style={{ backgroundColor: '#f8fafc' }} rows="4" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-premium w-100 py-3" onClick={(e) => e.preventDefault()}>
                        Send Message
                    </button>
                </form>

                <div className="mt-5 pt-4 border-top text-center text-muted small">
                    <p className="mb-0">Find us on Campus: Block A, Lab 4</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
