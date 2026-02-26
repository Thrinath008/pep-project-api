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
    try {
        const response = await axios.get('https://api.fbi.gov/wanted/v1/list', {
            params: { page, field_offices: office }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch FBI Wanted list' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
