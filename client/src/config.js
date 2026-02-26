const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : ''; // Empty string means the relative path will be used (if hosted on same domain)

export default API_BASE_URL;
