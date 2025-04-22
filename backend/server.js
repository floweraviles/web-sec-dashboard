require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
    console.log('GET /api/health received');
    res.json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

