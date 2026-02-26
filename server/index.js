const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Weather API Endpoint
app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    const API_KEY = 'd1767e18eaa2ad88e9e6fc0f378fef03';
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Gita Verse API Endpoint
app.get('/api/gita/:chapter/:verse', async (req, res) => {
    const { chapter, verse } = req.params;
    try {
        const response = await axios.get(`https://gita-api.vercel.app/tel/verse/${chapter}/${verse}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Gita verse' });
    }
});

// Jokes API Endpoint
app.get('/api/jokes', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

// FBI Wanted API Endpoint
app.get('/api/wanted', async (req, res) => {
    const { page = 1, office = '' } = req.query;

    // Construct params object conditionally
    const params = { page };
    if (office) {
        params.field_offices = office;
    }

    try {
        const response = await axios.get('https://api.fbi.gov/wanted/v1/list', {
            params,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('FBI API Error details:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data));
        } else {
            console.error('Message:', error.message);
        }
        res.status(500).json({ error: 'Failed to fetch FBI Wanted list' });
    }
});

// Fruityvice API Endpoint
app.get('/api/fruit/all', async (req, res) => {
    try {
        const response = await axios.get('https://www.fruityvice.com/api/fruit/all', {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Fruits API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch fruit data' });
    }
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
