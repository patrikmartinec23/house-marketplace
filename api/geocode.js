export default async function handler(req, res) {
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
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch geocode data' });
    }
}
