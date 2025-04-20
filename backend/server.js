const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/api/health', (req, res) => {
    console.log('GET /api/health received');
    res.json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

