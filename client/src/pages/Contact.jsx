import React from 'react'

function Contact() {
    return (
        <div className="card shadow-sm p-4">
            <h1 className="text-warning mb-4">Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us!</p>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
