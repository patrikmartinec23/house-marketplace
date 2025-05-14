import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/geocode', async (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.status(400).json({ error: 'Missing address parameter' });
    }

    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                address
            )}&key=${apiKey}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch geocode data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
